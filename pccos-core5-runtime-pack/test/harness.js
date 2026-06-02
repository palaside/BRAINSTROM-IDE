// test/harness.js
"use strict";
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const utils = require('./utils');

// Detect dry-run flag
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
if (dryRun) console.log('[Harness] Running in DRY-RUN mode – side‑effect tests will be skipped');

// Load test definitions
const testsPath = path.resolve(__dirname, 'tests.json');
let testDefs;
try {
  testDefs = JSON.parse(fs.readFileSync(testsPath, 'utf-8'));
} catch (e) {
  console.error('[Harness] Failed to read tests.json:', e.message);
  process.exit(1);
}

const reportLines = [];
let allPass = true;

function log(msg) {
  console.log('[Harness] ' + msg);
  reportLines.push('[Harness] ' + msg);
}

function runTest(test) {
  log(`Running ${test.id}: ${test.description}`);
  // Determine whether we should actually execute the command
  const shouldExecute = !(dryRun && test.type === 'sideEffect');
  let result = { status: 0, stdout: '', stderr: '' };
  if (shouldExecute) {
    const cmd = test.command;
    const cmdArgs = test.args || [];
    // safety: check no forbidden git commands are embedded
    utils.assertNoForbiddenGitCommands(cmd, cmdArgs);
    const options = {
      cwd: process.cwd(),
      stdio: ['ignore', 'pipe', 'pipe'],
      encoding: 'utf-8',
    };
    result = spawnSync(cmd, cmdArgs, options);
    result.stdout = result.stdout?.toString() || '';
    result.stderr = result.stderr?.toString() || '';
    // Optional logging per test
    if (test.log) {
      const logPath = path.resolve(__dirname, 'logs', `${test.id}.log`);
      utils.ensureDir(path.dirname(logPath));
      fs.writeFileSync(logPath, `STDOUT:\n${result.stdout}\nSTDERR:\n${result.stderr}`);
    }
  } else {
    // In dry‑run we simulate a successful execution with no side‑effects
    log('Dry‑run: skipping actual command execution');
  }
  // Run assertions – they receive the (real or simulated) result
  const passed = utils.runAssertions(test, result, result.stdout, result.stderr, dryRun);
  if (passed) {
    log(`✅ ${test.id} passed`);
  } else {
    log(`❌ ${test.id} failed`);
    allPass = false;
  }
}

// Execute each test sequentially
for (const test of testDefs.tests) {
  try {
    runTest(test);
  } catch (e) {
    log(`Exception in ${test.id}: ${e.message}`);
    allPass = false;
  }
}

// Write final report
const reportPath = path.resolve(__dirname, 'test-report.md');
const finalReport = `# Test Harness Report\n\nGenerated at ${new Date().toISOString()}\n\n${reportLines.join('\n')}`;
fs.writeFileSync(reportPath, finalReport, { encoding: 'utf-8' });
log('Report written to ' + reportPath);

process.exit(allPass ? 0 : 1);
