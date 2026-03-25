const logger = require("@wdio/logger").default;
const log = logger("e2e");

module.exports = {
  info: (message) => {
    console.log(`[INFO] ${message}`);
    try {
      log.info(message);
    } catch (e) {}
  },
  debug: (message) => console.log(`[DEBUG] ${message}`),
  warn: (message) => console.warn(`[WARN] ${message}`),
  error: (message) => console.error(`[ERROR] ${message}`),
};
