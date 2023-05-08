import dotenv from "dotenv";
import { logger } from "./logger";
import { SQSEvent } from "aws-lambda";

export const handler = async (event: SQSEvent): Promise<void> => {
  logger.info("Start running...");
  dotenv.config();
  logger.info("Config loaded");

  try {
    const payload = event.Records.map((r) => JSON.parse(r.body));
  } catch (e) {
    logger.error("Something wrong in this invocation");
    logger.error("Error details:", e);
    throw e;
  }
};
