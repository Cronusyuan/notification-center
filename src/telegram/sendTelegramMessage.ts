import { Telegraf } from "telegraf";
import { Config } from "../config/types";
import logger from "../logger";

export const sendTelegramMessage = async (
  config: Config,
  id: string,
  message: string
) => {
  const bot = new Telegraf(config.telegramBotToken);
  logger.info(`Sending Telegram message to ${id}`);
  await bot.telegram.sendMessage(id, message);
  logger.info("Sent successfully");
};
