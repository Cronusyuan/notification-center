import logger from "../logger";
import dotenv from "dotenv";
import { Config } from "./types";

export const loadConfig = (): Config => {
  dotenv.config();
  logger.info("Config loaded");
  const dryRun = process.env.DRY_RUN === "true";
  const awsRegion = process.env.AWS_REGION;
  const emailSender = process.env.EMAIL_SENDER;
  if (awsRegion && emailSender) {
    return {
      dryRun,
      awsRegion,
      emailSender,
    };
  }
  throw Error("Some environment variables are missing.");
};
