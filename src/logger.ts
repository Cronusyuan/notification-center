import winston, { format, transports } from "winston";

export const logger = winston.createLogger({
  format: format.combine(format.timestamp(), format.simple()),
  transports: [new transports.Console()],
});
