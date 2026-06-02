const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');
const { classifyMissing } = require('./missing-item-classifier');
const { evaluatePriority } = require('./priority-evaluator');

/**
 * Generate the NEXT_BATCH_PLAN.md content for Phase 2 – Runtime Implementation Foundation.
 * It does NOT suggest creating a source app; it only outlines the next runtime‑logic steps.
 */
function generatePlan() {
  logger.info('Generating NEXT_BATCH_PLAN.md');
  const healthPath = path.resolve(__dirname, '../../modules/05_missing_intelligence_engine/file-health-report.json');
  const healthReport = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
  const missing = classifyMissing(healthReport);
  const prioritized = evaluatePriority(missing);

  const lines = [];
  lines.push('# Next Batch Plan – Runtime Implementation Foundation');
  lines.push('');
  lines.push('## Overview');
  lines.push('The Core 5 runtime analysis is complete. This plan focuses on building the **runtime implementation foundation** that will enable future source‑code generation without creating any source artefacts at this stage.');
  lines.push('');
  lines.push('### Immediate Actions');
  lines.push('1. **Finalize Project Type** – user reviews `project-type-analysis.md` and approves a candidate.');
  lines.push('2. **Confirm Policy & Approvals** – ensure `policy-runtime.json` and `approval-rules.json` are satisfactory.');
  lines.push('3. **Run Dry‑Run Verification** – execute `run-core5-runtime-dry.js` to validate the runtime scaffolding.');
  lines.push('');
  lines.push('### Missing Items & Priorities');
  prioritized.forEach(item => {
    lines.push(`- **${item.description}** – ${item.reason} (Priority ${item.priority})`);
  });
  lines.push('');
  lines.push('### Not Applicable in this Phase');
  lines.push('- Creation of `src/` directory or any source files');
  lines.push('- Generation of `package.json` or build configuration');
  lines.push('- Locking the final project type (remain `candidate‑only` until approval)');
  lines.push('');
  lines.push('### Next Phase (Phase 3)');
  lines.push('Once the project type is approved, Phase 3 will involve actual source‑code scaffolding, package manifest creation, and build pipeline setup.');

  const content = lines.join('\n');
  const planPath = path.resolve(__dirname, '../../modules/05_missing_intelligence_engine/NEXT_BATCH_PLAN.md');
  fs.writeFileSync(planPath, content, 'utf8');
  logger.info(`NEXT_BATCH_PLAN.md written to ${planPath}`);
}

module.exports = { generatePlan };
