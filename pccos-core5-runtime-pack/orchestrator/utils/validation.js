// orchestrator/utils/validation.js
// Minimal runtime-report.json schema validation – no external deps.

function validateReport(report) {
  if (typeof report !== 'object' || report === null) return false;
  const requiredTop = ['status', 'modules', 'summary'];
  for (const key of requiredTop) {
    if (!(key in report)) return false;
  }
  if (!Array.isArray(report.modules) || report.modules.length !== 5) return false;
  const summary = report.summary;
  const requiredSummary = ['projectName', 'projectTypeMode', 'finalProjectType'];
  for (const key of requiredSummary) {
    if (!(key in summary)) return false;
  }
  return true;
}

module.exports = { validateReport };
