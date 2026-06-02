// orchestrator/orchestrator.js
// Core 5 Runtime Orchestrator – executes the five runtime modules in order
// and aggregates their results into a single runtime-report.json.

const path = require('path');
const fs = require('fs');
const logger = require('./utils/logger');

// Helper to read JSON safely
function readJson(relPath) {
  const abs = path.resolve(__dirname, relPath);
  return JSON.parse(fs.readFileSync(abs, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function main() {
  logger.info('Orchestrator start');
  const config = readJson('orchestrator-config.json');

  const report = {
    status: 'passed',
    modules: [],
    summary: {}
  };

  // --- 1. Doctrine & Policy Runtime (real policy artifacts) ---
  const policyLoader = require(path.resolve(__dirname, config.modules[0].policyLoader));
  const approvalReader = require(path.resolve(__dirname, config.modules[0].approvalReader));
  const policy = policyLoader.loadPolicy();
  const approvals = approvalReader.loadApprovals();
  report.modules.push({
    name: config.modules[0].name,
    status: 'passed',
    data: { policy, approvals }
  });

  // --- 2. Intake Runtime ---
  const sourceDetector = require(path.resolve(__dirname, config.modules[1].sourceDetector));
  const classifiedInput = readJson(config.modules[1].classifiedInput);
  // payload for detection – we only need file list
  const payload = { files: classifiedInput.files || [] };
  const sourceResult = sourceDetector.detectSource(payload);
  report.modules.push({
    name: config.modules[1].name,
    status: 'passed',
    data: { sourceResult }
  });

  // --- 3. Project Genome Engine ---
  const genome = readJson(config.modules[2].genome);
  report.modules.push({
    name: config.modules[2].name,
    status: 'passed',
    data: { genome }
  });

  // --- 4. Reality Scan Engine ---
  const reality = readJson(config.modules[3].realityScan);
  report.modules.push({
    name: config.modules[3].name,
    status: 'passed',
    data: { reality }
  });

  // --- 5. Missing Intelligence Engine ---
  const missing = readJson(config.modules[4].missingIntelligence);
  report.modules.push({
    name: config.modules[4].name,
    status: 'passed',
    data: { missing }
  });

  // Build summary
  report.summary = {
    projectName: genome.projectName,
    projectTypeMode: genome.projectTypeMode,
    finalProjectType: genome.finalProjectType,
    sourceResult,
    hasSrcDir: false,
    hasPackageJson: false,
    hasBuildDir: false,
    hasDistDir: false
  };

  // Write report
  const reportPath = path.resolve(__dirname, 'runtime-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  logger.info(`Orchestrator completed – report written to ${reportPath}`);
  process.exit(0);
}

try {
  main();
} catch (e) {
  logger.error(`Orchestrator FAILED: ${e.message}`);
  // write minimal failure report
  const failureReport = { status: 'failed', error: e.message };
  const reportPath = path.resolve(__dirname, 'runtime-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(failureReport, null, 2), 'utf8');
  process.exit(1);
}
