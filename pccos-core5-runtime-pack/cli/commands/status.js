// cli/commands/status.js
"use strict";
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');

function loadReport() {
  const reportPath = path.resolve(__dirname, '../../orchestrator/runtime-report.json');
  if (!fs.existsSync(reportPath)) {
    logger.error('Runtime report not found at ' + reportPath);
    process.exit(1);
  }
  try {
    const data = JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
    return data;
  } catch (e) {
    logger.error('Failed to parse runtime report: ' + e.message);
    process.exit(1);
  }
}

function printStatus() {
  const report = loadReport();
  logger.info('=== Runtime Status ===');
  logger.info(`status: ${report.status}`);
  logger.info(`modules: ${Array.isArray(report.modules) ? report.modules.length : 0}`);
  if (report.summary) {
    logger.info(`projectName: ${report.summary.projectName}`);
    logger.info(`projectTypeMode: ${report.summary.projectTypeMode}`);
    logger.info(`finalProjectType: ${report.summary.finalProjectType}`);
  }
}

printStatus();
process.exit(0);
