const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');

/**
 * Load the core5 runtime manifest and verify that all declared inputs and outputs
 * actually exist on disk. Returns an object with `missingInputs`, `missingOutputs`
 * arrays (absolute paths).
 */
function checkManifest() {
  logger.info('Checking manifest against disk');
  const manifestPath = path.resolve(__dirname, '../../core5-runtime-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const packRoot = path.resolve(__dirname, '../../');
  const missingInputs = [];
  const missingOutputs = [];

  manifest.modules.forEach(mod => {
    const modFolder = path.join(packRoot, 'modules', mod.folder);
    (mod.inputs || []).forEach(input => {
      const candidate = path.join(modFolder, input);
      if (!fs.existsSync(candidate)) missingInputs.push(candidate);
    });
    (mod.outputs || []).forEach(output => {
      const candidate = path.join(modFolder, output);
      if (!fs.existsSync(candidate)) missingOutputs.push(candidate);
    });
  });

  return { missingInputs, missingOutputs };
}

module.exports = { checkManifest };
