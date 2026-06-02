const { loadPolicy } = require('./policy-loader');
const { loadApprovals } = require('./approval-reader');
const logger = require('../../utils/logger');

/**
 * Guard function that checks a proposed action against policy prohibitions
 * and required approvals. If the action is prohibited, it throws an error.
 * If the action requires explicit approval, it throws a RiskGuardError that
 * signals the runtime to request user approval.
 */
class RiskGuardError extends Error {
  constructor(message, action) {
    super(message);
    this.name = 'RiskGuardError';
    this.action = action;
  }
}

function guard(action, details = {}) {
  const policy = loadPolicy();
  const approvals = loadApprovals();

  // 1. Check prohibitions (simple substring match for demo purposes)
  if (policy.prohibitions && policy.prohibitions.some(p => p.toLowerCase().includes(action.toLowerCase()))) {
    logger.error(`Prohibited action attempted: ${action}`);
    throw new Error(`Action "${action}" is prohibited by policy.`);
  }

  // 2. Check if action is listed in approvals.required list
  const approvalEntry = (approvals.approvals || []).find(a => a.action === action && a.required);
  if (approvalEntry) {
    logger.warn(`Action "${action}" requires explicit user approval.`);
    throw new RiskGuardError(`User approval required for action: ${action}`, action);
  }

  logger.info(`Action "${action}" passed risk‑guard checks.`);
  return true;
}

module.exports = { guard, RiskGuardError };
