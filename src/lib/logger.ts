import { createLogger, format, transports } from "winston";

import serverEnv from "../serverEnv";

import { SERVICE_NAME } from "../utils/constants";

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({ stack: true }),
    format.json(),
  ),
  defaultMeta: {
    service: SERVICE_NAME, //TODO: change to your service name
    env: serverEnv.environment,
  },
  transports: [
    //TODO: add your preferred transport
  ],
});

export default logger;

if (!serverEnv.isProduction) {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  );
}
