import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { Config } from "../config/types";
import logger from "../logger";

export const sendEmail = async (
  config: Config,
  address: string,
  title: string,
  content: string
) => {
  const client = new SESClient({ region: config.awsRegion });
  const command = new SendEmailCommand({
    Source: config.emailSender,
    Destination: {
      ToAddresses: [address],
    },
    Message: {
      Subject: {
        Data: title,
      },
      Body: {
        Text: {
          Data: content,
        },
      },
    },
  });
  logger.info("Sending email...");
  await client.send(command);
  logger.info("Send email successfully");
};
