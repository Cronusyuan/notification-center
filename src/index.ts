import { SQSEvent } from "aws-lambda";
import logger from "./logger";
import { loadConfig } from "./config/loadConfig";
import { stubMessage } from "./stub/stubMessage";
import { NotificationEvent, PREFERRED_TYPES } from "./types";
import { userPreference } from "./user-preference";
import { sendEmail } from "./ses/sendEmail";
import { sendMessage } from "./discord/sendMessage";
import { sendTelegramMessage } from "./telegram/sendTelegramMessage";

export const handler = async (event: SQSEvent): Promise<void> => {
  try {
    logger.info("Start running...");
    const config = loadConfig();

    const payloads = (config.dryRun ? stubMessage : event).Records.map((r) =>
      JSON.parse(r.body)
    );
    await Promise.all(
      payloads.map((event: NotificationEvent) => {
        logger.info(`Got notification event: ${JSON.stringify(event)}`);
        const preference = userPreference[event.receipient];
        logger.info(
          `User preference is ${preference.preferredType}, to ${preference.notificationTarget}`
        );
        switch (preference.preferredType) {
          case PREFERRED_TYPES.EMAIL:
            return sendEmail(
              config,
              preference.notificationTarget,
              event.type,
              event.content
            );
          case PREFERRED_TYPES.TELEGRAM:
            return sendTelegramMessage(
              config,
              preference.notificationTarget,
              event.content
            );
          case PREFERRED_TYPES.DISCORD:
            return sendMessage(
              config,
              preference.notificationTarget,
              event.content
            );
        }
      })
    );
    logger.info("Successfully processed...");
  } catch (e) {
    logger.error("Something wrong in this invocation");
    logger.error("Error details:", e);
    throw e;
  }
};
