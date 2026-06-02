const logger = require('../../utils/logger');

/**
 * Given the file‑health‑report JSON, categorize missing items.
 * Returns an array of objects: { category, description, reason }.
 */
function classifyMissing(healthReport) {
  logger.info('Classifying missing items');
  const missing = [];
  // Example categories based on the current foundation pack.
  if (healthReport.checks && healthReport.checks.unexpectedFiles && healthReport.checks.unexpectedFiles.length) {
    healthReport.checks.unexpectedFiles.forEach(f => {
      missing.push({ category: 'unexpected', description: f, reason: 'File not part of foundation' });
    });
  }
  // No source code present – mark as future requirement.
  missing.push({ category: 'source-code', description: 'src/ directory', reason: 'Foundation pack does not contain source code yet' });
  missing.push({ category: 'package-manifest', description: 'package.json', reason: 'Will be added in implementation phase' });
  return missing;
}

module.exports = { classifyMissing };
