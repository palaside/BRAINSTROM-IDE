// cli/cli.js
"use strict";
const path = require('path');
const fs = require('fs');
const { spawnSync } = require('child_process');

// Load configuration (list of allowed commands)
const configPath = path.resolve(__dirname, 'cli-config.json');
let allowedCommands = [];
try {
  const cfg = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
  allowedCommands = cfg.commands || [];
} catch (e) {
  console.error('[CLI] Failed to load cli-config.json:', e.message);
  process.exit(1);
}

// Simple logger utility (will be overridden by utils/logger later)
const logger = {
  info: (msg) => console.log('[CLI] ' + msg),
  error: (msg) => console.error('[CLI] ' + msg),
};

function printHelp() {
  logger.info('Supported commands:');
  allowedCommands.forEach((cmd) => logger.info('  - ' + cmd));
  logger.info('Usage: node cli/cli.js <command>');
}

function runCommand(command, args = []) {
  const cmdPath = path.resolve(__dirname, 'commands', command + '.js');
  if (!fs.existsSync(cmdPath)) {
    logger.error(`Command module not found: ${command}`);
    process.exit(1);
  }
  // Execute the command module in a child process to isolate side‑effects
  const result = spawnSync('node', [cmdPath, ...args], { stdio: 'inherit' });
  if (result.error) {
    logger.error(`Failed to execute ${command}: ${result.error.message}`);
    process.exit(1);
  }
  process.exit(result.status);
}

// Entry point
function main() {
  const argv = process.argv.slice(2);
  if (argv.length === 0) {
    logger.info('No command supplied.');
    printHelp();
    process.exit(0);
  }
  const cmd = argv[0];
  if (!allowedCommands.includes(cmd)) {
    logger.error(`Unsupported command: ${cmd}`);
    printHelp();
    process.exit(1);
  }
  // For now we simply forward remaining args to the command module
  const cmdArgs = argv.slice(1);
  runCommand(cmd, cmdArgs);
}

main();
