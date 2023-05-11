import { Telegraf } from "telegraf";
import { Config } from "../config/types";
import logger from "../logger";

export const sendTelegramMessage = async (
  config: Config,
  chatId: string,
  message: string
) => {
  const bot = new Telegraf(config.telegramBotToken);
  logger.info(`Sending Telegram message to ${chatId}`);
  await bot.telegram.sendMessage(parseInt(chatId), message);
  logger.info("Sent successfully");
};
