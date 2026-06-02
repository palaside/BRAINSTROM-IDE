// cli/commands/report.js
"use strict";
const fs = require('fs');
const path = require('path');
const logger = require('../utils/logger');

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

function writeCliReport(report) {
  const reportFile = path.resolve(__dirname, '../../cli/CLI_REPORT.md');
  const content = `# CLI Runtime Report\n\n` +
    `**Status:** ${report.status}\n\n` +
    `## Summary\n` +
    `- Project Name: ${report.summary?.projectName || 'N/A'}\n` +
    `- Project Type Mode: ${report.summary?.projectTypeMode || 'N/A'}\n` +
    `- Final Project Type: ${report.summary?.finalProjectType || 'N/A'}\n\n` +
    `## Modules (${Array.isArray(report.modules) ? report.modules.length : 0})\n` +
    `${(report.modules || []).map((m, i) => `- ${i + 1}. ${m.name || JSON.stringify(m)}`).join('\n')}`;
  try {
    fs.writeFileSync(reportFile, content, { encoding: 'utf-8' });
    logger.info('CLI report written to ' + reportFile);
  } catch (e) {
    logger.error('Failed to write CLI report: ' + e.message);
    process.exit(1);
  }
}

function main() {
  const report = loadReport();
  writeCliReport(report);
  process.exit(0);
}

main();
