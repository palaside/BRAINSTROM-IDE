const logger = require('../../utils/logger');

/**
 * Classify a list of files into categories based on simple filename patterns.
 * This is a lightweight placeholder for the real classifier.
 */
function classifyArtifacts(files) {
  logger.info('Classifying artifacts');
  const classifications = [];
  files.forEach((file) => {
    if (/README|context|agent/i.test(file)) {
      classifications.push({ type: 'idea', file });
    } else if (/project-type-candidates|auto-detect-policy/i.test(file)) {
      classifications.push({ type: 'requirement', file });
    } else if (/policy-runtime|approval-rules/i.test(file)) {
      classifications.push({ type: 'decision', file });
    } else {
      classifications.push({ type: 'evidence', file });
    }
  });
  return classifications;
}

module.exports = { classifyArtifacts };
