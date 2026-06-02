const logger = require('../../utils/logger');
const path = require('path');
const fs = require('fs');

/**
 * Resolve the project name using the fallback order:
 * 1. context-pack-manifest.json -> projectName field (if present)
 * 2. README.md first line (if it looks like a title)
 * 3. Folder name of the pack root
 */
function resolveName() {
  logger.info('Resolving project name');
  const packRoot = path.resolve(__dirname, '../../');
  // 1. context-pack-manifest.json
  const manifestPath = path.join(packRoot, 'Context Foundation - 05ALL12-context-pack', 'context-pack-manifest.json');
  if (fs.existsSync(manifestPath)) {
    try {
      const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      if (manifest.projectName) return manifest.projectName;
    } catch (_) { /* ignore parse errors */ }
  }
  // 2. README.md title
  const readmePath = path.join(packRoot, 'Context Foundation - 05ALL12-context-pack', 'README.md');
  if (fs.existsSync(readmePath)) {
    const lines = fs.readFileSync(readmePath, 'utf8').split(/\r?\n/);
    const title = lines.find(l => l.trim().startsWith('#'));
    if (title) return title.replace(/^#\s*/, '').trim();
  }
  // 3. Folder name fallback
  const folderName = path.basename(packRoot);
  return folderName;
}

module.exports = { resolveName };
