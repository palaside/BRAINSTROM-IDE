const fs = require('fs');
const path = require('path');
const logger = require('../../utils/logger');

/**
 * Build a source‑map JSON object mapping logical names to absolute paths.
 * Uses the list of files provided in `payload.files` (array of file names).
 */
function buildSourceMap(payload) {
  logger.info('Building source map');
  const map = {};
  const base = path.resolve(__dirname, '../../'); // pack root
  payload.files.forEach((file) => {
    const abs = path.join(base, file);
    map[file] = abs.replace(/\\/g, '/'); // use forward slashes for consistency
  });
  return { schemaVersion: 'pccos.source-map.v1', generatedAt: new Date().toISOString(), map };
}

module.exports = { buildSourceMap };
