import { Client, Events, GatewayIntentBits } from "discord.js";
import { Config } from "../config/types";
import logger from "../logger";

export const sendMessage = async (
  config: Config,
  id: string,
  content: string
) => {
  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.DirectMessages],
  });
  client.once(Events.ClientReady, (c) => {
    logger.info(`Discord bot logged in! as ${c.user.tag}`);
  });
  await client.login(config.discordBotToken);
  await client.users.send(id, content);
};
