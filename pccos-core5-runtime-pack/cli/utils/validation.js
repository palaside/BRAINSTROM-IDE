// cli/utils/validation.js
"use strict";
/**
 * Simple runtime‑report validator used by the CLI verify command.
 * It throws an Error if the report does not meet the required schema.
 */
function validateReport(report) {
  if (typeof report !== 'object' || report === null) {
    throw new Error('Report must be an object');
  }
  // Required top‑level fields
  const requiredTop = ['status', 'modules', 'summary'];
  requiredTop.forEach((field) => {
    if (!(field in report)) {
      throw new Error(`Missing required field: ${field}`);
    }
  });
  // status must be a string
  if (typeof report.status !== 'string') {
    throw new Error('status must be a string');
  }
  // modules must be an array with exactly 5 entries
  if (!Array.isArray(report.modules) || report.modules.length !== 5) {
    throw new Error('modules must be an array of 5 entries');
  }
  // summary must contain the three required keys
  const summary = report.summary;
  ['projectName', 'projectTypeMode', 'finalProjectType'].forEach((key) => {
    if (!(key in summary)) {
      throw new Error(`summary missing required key: ${key}`);
    }
  });
  // Enforce project constraints
  if (summary.projectTypeMode !== 'candidate-only') {
    throw new Error('projectTypeMode must remain candidate-only');
  }
  if (summary.finalProjectType !== 'pending-analysis') {
    throw new Error('finalProjectType must remain pending-analysis');
  }
}

module.exports = { validateReport };
