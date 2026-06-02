const logger = require('../../utils/logger');

/**
 * Assign a priority (P0‑P4) to each missing item.
 * For the foundation pack we treat source‑code and package‑manifest as P2 (core future)
 * and any unexpected files as P3 (quality). Others default to P4.
 */
function evaluatePriority(missingItems) {
  logger.info('Evaluating priority for missing items');
  return missingItems.map(item => {
    let priority = 'P4';
    if (item.category === 'source-code' || item.category === 'package-manifest') {
      priority = 'P2'; // core future requirement
    } else if (item.category === 'unexpected') {
      priority = 'P3';
    }
    return { ...item, priority };
  });
}

module.exports = { evaluatePriority };
