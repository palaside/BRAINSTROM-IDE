// cli/commands/dry-run.js
"use strict";
const { spawnSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');

function checkSyntax(filePath) {
  const result = spawnSync('node', ['--check', filePath], { stdio: 'inherit' });
  if (result.status !== 0) {
    logger.error(`Syntax check failed for ${filePath}`);
    process.exit(1);
  }
  logger.info(`Syntax check passed for ${filePath}`);
}

function runOrchestrator() {
  const orchestratorPath = path.resolve(__dirname, '../../orchestrator/orchestrator.js');
  if (!fs.existsSync(orchestratorPath)) {
    logger.error('Orchestrator script not found at ' + orchestratorPath);
    process.exit(1);
  }
  const result = spawnSync('node', [orchestratorPath], { stdio: 'inherit' });
  if (result.error) {
    logger.error('Failed to execute orchestrator: ' + result.error.message);
    process.exit(1);
  }
  process.exit(result.status);
}

function main() {
  const orchestratorPath = path.resolve(__dirname, '../../orchestrator/orchestrator.js');
  checkSyntax(orchestratorPath);
  runOrchestrator();
}

main();
