// cli/utils/logger.js
"use strict";
module.exports = {
  info: (msg) => console.log('[CLI] ' + msg),
  error: (msg) => console.error('[CLI] ' + msg),
  warn: (msg) => console.warn('[CLI] ' + msg),
};
