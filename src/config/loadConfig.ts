import logger from "../logger";
import dotenv from "dotenv";
import { Config } from "./types";

export const loadConfig = (): Config => {
  dotenv.config();
  logger.info("Config loaded");
  const dryRun = process.env.DRY_RUN === "true";
  const awsRegion = process.env.AWS_REGION;
  const emailSender = process.env.EMAIL_SENDER;
  const discordBotToken = process.env.DISCORD_BOT_TOKEN;
  if (awsRegion && emailSender && discordBotToken) {
    return {
      dryRun,
      awsRegion,
      emailSender,
      discordBotToken,
    };
  }
  throw Error("Some environment variables are missing.");
};
