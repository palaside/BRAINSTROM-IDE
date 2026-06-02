// run-core5-runtime-dry.js
// Dry‑run integration test for Phase 2 – Runtime Implementation Foundation.
// The script performs read‑only checks against the existing Core 5 artifacts.
// It never writes to disk, never creates src/ or package.json, and never locks the project type.

const path = require('path');
const fs = require('fs');
const logger = require('./utils/logger');

// Helper to safely read JSON files
function readJson(relPath) {
  const abs = path.resolve(__dirname, relPath);
  return JSON.parse(fs.readFileSync(abs, 'utf8'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function main() {
  logger.info('Starting dry‑run verification');

  // 1. Verify project‑genome.json fields
  const genome = readJson('modules/03_project_genome_engine/project-genome.json');
  assert(genome.projectName === 'Context Foundation - 05ALL12', 'projectName mismatch');
  assert(genome.projectTypeMode === 'candidate-only', 'projectTypeMode is not candidate-only');
  assert(genome.finalProjectType === 'pending-analysis', 'finalProjectType is not pending-analysis');
  logger.info('✓ project‑genome.json fields verified');

  // 2. Verify reality‑scan.json indicates no runnable source app
  const reality = readJson('modules/04_reality_scan_engine/reality-scan.json');
  const findings = reality.findings || {};
  assert(findings.packageJson === false, 'packageJson should be false');
  assert(findings.srcDirectory === false, 'srcDirectory should be false');
  assert(findings.buildDirectory === false, 'buildDirectory should be false');
  logger.info('✓ reality‑scan.json indicates no source app');

  // 3. Verify missing‑intelligence.json does NOT treat package.json / src as P0 blocker
  const missing = readJson('modules/05_missing_intelligence_engine/missing-intelligence.json');
  const pkgItem = missing.missingArtifacts.find(i => i.description.includes('package.json'));
  const srcItem = missing.missingArtifacts.find(i => i.description.includes('src/'));
  assert(pkgItem && pkgItem.priority !== 'P0', 'package.json incorrectly marked as P0');
  assert(srcItem && srcItem.priority !== 'P0', 'src/ incorrectly marked as P0');
  logger.info('✓ missing‑intelligence.json priorities are appropriate');

  // 4. Verify NEXT_BATCH_PLAN.md points to Runtime Implementation Foundation and does not mention creating a source app
  const planPath = path.resolve(__dirname, 'modules/05_missing_intelligence_engine/NEXT_BATCH_PLAN.md');
  const rawPlanContent = fs.readFileSync(planPath, 'utf8');
  // Helper to normalize text for robust token check
  function normalizeText(text) {
    return String(text)
      .normalize('NFKC')
      .replace(/[\u200B-\u200D\uFEFF]/g, '')
      .replace(/\u00A0/g, ' ')
      .replace(/[–—−]/g, '-')
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }
  const normalized = normalizeText(rawPlanContent);
  const requiredTokens = ['runtime', 'implementation', 'foundation'];
  const missingTokens = requiredTokens.filter(token => !normalized.includes(token));
  if (missingTokens.length > 0) {
    throw new Error(
      'NEXT_BATCH_PLAN.md missing required tokens: ' +
        missingTokens.join(', ') +
        '\nPath: ' +
        planPath +
        '\nPreview: ' +
        normalized.slice(0, 500)
    );
  }
  const forbidden = ['source app', 'website', 'webapp', 'spa', 'electron'];
  forbidden.forEach(word => {
    assert(!normalized.includes(word), `NEXT_BATCH_PLAN.md contains forbidden term "${word}"`);
  });
  logger.info('✓ NEXT_BATCH_PLAN.md correctly references Runtime Implementation Foundation');

  // 5. Ensure no prohibited directories/files exist
  const prohibited = ['src', 'package.json', 'build', 'dist'];
  const packRoot = path.resolve(__dirname);
  prohibited.forEach(name => {
    const candidate = path.join(packRoot, name);
    if (fs.existsSync(candidate)) {
      throw new Error(`Prohibited file or directory found: ${candidate}`);
    }
  });
  logger.info('✓ No prohibited files or directories (src/, package.json, build/, dist/) exist');

  logger.info('Dry‑run verification PASSED');
  process.exit(0);
}

try {
  main();
} catch (e) {
  logger.error(`Dry‑run verification FAILED: ${e.message}`);
  process.exit(1);
}
