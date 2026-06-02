// cli/commands/orchestrate.js
"use strict";
const { spawnSync } = require('child_process');
const path = require('path');
const logger = require('../utils/logger');

function runOrchestrator() {
  const orchestratorPath = path.resolve(__dirname, '../../orchestrator/orchestrator.js');
  if (!require('fs').existsSync(orchestratorPath)) {
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

runOrchestrator();
