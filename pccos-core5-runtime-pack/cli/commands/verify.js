// cli/commands/verify.js
"use strict";
const path = require('path');
const fs = require('fs');
const logger = require('../utils/logger');
const { validateReport } = require('../utils/validation');

function loadReport() {
  const reportPath = path.resolve(__dirname, '../../orchestrator/runtime-report.json');
  if (!fs.existsSync(reportPath)) {
    logger.error('Runtime report not found at ' + reportPath);
    process.exit(1);
  }
  try {
    return JSON.parse(fs.readFileSync(reportPath, 'utf-8'));
  } catch (e) {
    logger.error('Failed to parse runtime report: ' + e.message);
    process.exit(1);
  }
}

function runVerify() {
  const report = loadReport();
  try {
    validateReport(report);
    logger.info('Verification passed.');
    process.exit(0);
  } catch (e) {
    logger.error('Verification failed: ' + e.message);
    process.exit(1);
  }
}

runVerify();
