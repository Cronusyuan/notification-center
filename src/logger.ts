import winston, { format, transports } from "winston";

export default winston.createLogger({
  format: format.combine(format.timestamp(), format.simple()),
  transports: [new transports.Console()],
});
