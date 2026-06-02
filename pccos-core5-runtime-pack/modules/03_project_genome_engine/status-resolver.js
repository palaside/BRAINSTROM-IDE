const logger = require('../../utils/logger');
const fs = require('fs');
const path = require('path');

/**
 * Determine the current project status.
 * For the foundation pack we consider the presence of core artifacts.
 */
function resolveStatus() {
  logger.info('Resolving project status');
  const requiredFiles = [
    'policy-runtime.json',
    'approval-rules.json',
    'project-genome.json',
    'reality-scan.json'
  ];
  const packRoot = path.resolve(__dirname, '../../');
  const missing = requiredFiles.filter(f => !fs.existsSync(path.join(packRoot, 'modules', '01_doctrine_policy_runtime', f)) &&
                                          !fs.existsSync(path.join(packRoot, 'modules', '03_project_genome_engine', f)) &&
                                          !fs.existsSync(path.join(packRoot, 'modules', '04_reality_scan_engine', f)) );
  if (missing.length === 0) return 'context-foundation-ready';
  return 'incomplete-foundation';
}

module.exports = { resolveStatus };
