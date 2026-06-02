const logger = require('../../utils/logger');

/**
 * Simple source detector.
 * Returns one of: 'context-only', 'archive', 'source-app'.
 * For the foundation pack we only have context files, so it returns 'context-only'.
 */
function detectSource(payload) {
  logger.info('Running source detector');
  // Payload is an object with list of file names; we check for any source code files.
  const codeExtensions = ['.js', '.ts', '.jsx', '.tsx', '.py', '.java'];
  const hasCode = payload.files && payload.files.some(f => codeExtensions.some(ext => f.endsWith(ext)));
  if (hasCode) return 'source-app';
  // No code files – treat as context only.
  return 'context-only';
}

module.exports = { detectSource };
