const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');

/**
 * Recursively walk a directory and return a report object:
 *   missing: list of expected files that do not exist (if a manifest is supplied)
 *   empty:   list of files that exist but are zero‑bytes
 */
function scanFileExistence(rootDir) {
  logger.info(`Scanning file existence under ${rootDir}`);
  const report = { missing: [], empty: [] };
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    entries.forEach(entry => {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else {
        const stats = fs.statSync(full);
        if (stats.size === 0) report.empty.push(full);
      }
    });
  }
  walk(rootDir);
  return report;
}

module.exports = { scanFileExistence };
