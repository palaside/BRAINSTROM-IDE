const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');

/**
 * Load the approval‑rules definition.
 * Returns the parsed JSON object.
 */
function loadApprovals() {
  const approvalsPath = path.resolve(__dirname, 'approval-rules.json');
  logger.info(`Loading approvals from ${approvalsPath}`);
  const raw = fs.readFileSync(approvalsPath, 'utf8');
  return JSON.parse(raw);
}

module.exports = { loadApprovals };
