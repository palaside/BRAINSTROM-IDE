const logger = require('../../utils/logger');
const fs = require('fs');
const path = require('path');

/**
 * Simple scorer that reads classified‑input.json and assigns confidence
 * scores to the six known candidate types. The scores are deterministic
 * based on the number of "idea" and "requirement" artifacts.
 */
function scoreTypes() {
  logger.info('Scoring project‑type candidates');
  const classifiedPath = path.resolve(__dirname, '../../modules/02_intake_runtime/classified-input.json');
  const data = JSON.parse(fs.readFileSync(classifiedPath, 'utf8'));
  // Count items per category (very naive weighting)
  const counts = { idea: 0, requirement: 0, decision: 0, evidence: 0 };
  data.items.forEach(i => { counts[i.type] = (counts[i.type] || 0) + 1; });

  const total = Object.values(counts).reduce((a, b) => a + b, 1);
  const base = 0.5 / total; // distribute 0.5 across types, remaining 0.5 reserved for other signals
  const candidates = [
    { type: 'Web Application', confidence: base * counts.idea },
    { type: 'Command-Line Tool', confidence: base * counts.requirement },
    { type: 'Library / SDK', confidence: base * counts.decision },
    { type: 'Data Pipeline', confidence: base * counts.evidence },
    { type: 'Machine-Learning Model', confidence: base * 0.5 },
    { type: 'Service / API', confidence: base * 0.5 }
  ];
  // Normalize to sum to 1 (approx)
  const sum = candidates.reduce((s, c) => s + c.confidence, 0);
  candidates.forEach(c => { c.confidence = Number((c.confidence / sum).toFixed(2)); });
  return candidates;
}

module.exports = { scoreTypes };
