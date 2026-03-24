import logger from "@wdio/logger";

const log = logger("e2e");

export function info(message) {
  log.info(message);
}

export function debug(message) {
  log.debug(message);
}

export function warn(message) {
  log.warn(message);
}

export function error(message) {
  log.error(message);
}
