const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');

/**
 * Load the policy runtime definition.
 * Returns the parsed JSON object or throws on error.
 */
function loadPolicy() {
  const policyPath = path.resolve(__dirname, 'policy-runtime.json');
  logger.info(`Loading policy from ${policyPath}`);
  const raw = fs.readFileSync(policyPath, 'utf8');
  return JSON.parse(raw);
}

module.exports = { loadPolicy };
