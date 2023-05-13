# Notification Center Spike

A spike project to investigate how to integrate Paraspace events with Discord API/ Telegram API/ Email

This spike is based on the assumptions that:

1. All notification events are from a SQS queue that sent by a upstream service
2. The notified user's notification perference(Email|Discord|Telegram) and notified account information(Email address|Discord account ID|Telegram chat ID) can be fetched from other place.

## Requirements

1. AWS SES
   1. A verified domain/identity in AWS SES
   2. Promote AWS SES to production
   3. Set the verified identity as the sender in environment varaiables
2. Discord
   1. A Discord Bot created in Discord Develooper Portal
   2. Install the bot to your expected channel
   3. Set the bot's token in environment variables
3. Telegram
   1. A Telegram Bot created in Telegram @BotFather chat
   2. Set the bot's token in environment variables

## Configuration

This bot is configured by environment variables. Before you running it, please make sure you have prepared the requirements mentioned above.

| Environment        | Description                                                             | Default | Required |
| ------------------ | ----------------------------------------------------------------------- | ------- | -------- |
| DRY_RUN            | In dry run mode bot will not get real message, using a stub one instead | false   | false    |
| AWS_REGION         | The region that this application is in                                  |         | true     |
| EMAIL_SENDER       | The sender identity in AWS SES                                          |         | true     |
| DISCORD_BOT_TOKEN  | The token of the discord bot                                            |         | true     |
| TELEGRAM_BOT_TOKEN | The token of the telegram bot                                           |         | true     |

## Local Usage

1. Clone this repo
2. Run `nvm use` to switch to correct node version
3. Make sure `pnpm` is installed
4. Create your own environment variables in `.env` file
5. Run `pnpm install`
6. Run `pnpm start` or `pnpm dryrun`

## How to generate Access tokens for different notification target?

### AWS SES

- Login to [AWS SES console](https://console.aws.amazon.com/ses)
- Go to `Verified Identities` tab
- Click `Create identity`
- Choose `Email address` as identity type
- Input your email address that will be used as the sender
- Click `Create identity` button
- Go to your email inbox and click the link in the email to verify it
- Set the sender's email address to `EMAIL_SENDER` environment variable
- Done!

### Discord

- Login to Discord and go to [Discord Developer Portal](https://discord.com/developers/applications)
- Click `New Application` to create the App that you will use to manage the Discord Bot
- Go to `Bot` tab
- Give the bot a meaningful username / icon
- Click `Reset Token` and save the Bot's token
- Go to `OAuth2/URL Generator` tab
- Click `bot` checkbox and then click `Send Messages` & `Send TTS Messages` in the following checkbox
- Copy the generated URL in the bottom and go to this link
- The link will direct you to a page to install the Bot to a Discord server that you own
- Confirm it
- Set the Bot's token to `DISCORD_BOT_TOKEN` environment variable
- Done!

### Telegram

- Login to your Telegram account in any app
- Contact the offcial @BotFather
- Follow the instruction of @BotFather to create the Telegram Bot
- Save the Bot's token
- Set the Bot's token to `TELEGRAM_BOT_TOKEN` environment variable
- Done!
