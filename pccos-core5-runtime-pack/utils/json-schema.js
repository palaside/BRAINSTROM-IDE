const fs = require('fs');
const path = require('path');

/**
 * Very small JSON‑Schema validator used only for internal sanity checks.
 * It loads a *.schema.json file located next to the module that calls it
 * (passed as `schemaFilePath`) and validates `data` against it using the
 * AJV library if available. If AJV is not installed, it falls back to a
 * simple structural check (property existence only). This keeps the
 * runtime implementation lightweight and avoids external dependencies.
 */
function validate(data, schemaFilePath) {
  try {
    const schemaPath = path.resolve(schemaFilePath);
    if (!fs.existsSync(schemaPath)) {
      // No schema – assume valid.
      return { valid: true, errors: [] };
    }
    const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf8'));
    // Try to use AJV if present.
    try {
      const Ajv = require('ajv');
      const ajv = new Ajv();
      const validateFn = ajv.compile(schema);
      const valid = validateFn(data);
      return { valid, errors: validateFn.errors || [] };
    } catch (_) {
      // AJV not available – perform shallow check of required properties.
      if (schema.required && Array.isArray(schema.required)) {
        const missing = schema.required.filter((p) => !(p in data));
        if (missing.length) {
          return { valid: false, errors: missing.map((p) => ({ message: `Missing required property ${p}` })) };
        }
      }
      return { valid: true, errors: [] };
    }
  } catch (e) {
    return { valid: false, errors: [{ message: e.message }] };
  }
}

module.exports = { validate };
