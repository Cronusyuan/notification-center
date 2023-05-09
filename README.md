# Notification Center Spike

A spike project to investigate how to integrate Paraspace events with Discord API/ Telegram API/ Email

## Requirements

1. AWS SES
   1. A verified domain/identity in AWS SES
   2. Promote AWS SES to production
   3. Set the verified identity as the sender in environment varaiables
2. Discord
   1. A Discord Bot created in Discord Develooper Portal
   2. Install the bot to your expected channel
   3. Set the bot's token in environment variables

## Configuration

This bot is configured by environment variables. Before you running it, please make sure you have prepared the requirements mentioned above.

| Environment       | Description                                                             | Default | Required |
| ----------------- | ----------------------------------------------------------------------- | ------- | -------- |
| DRY_RUN           | In dry run mode bot will not get real message, using a stub one instead | false   | false    |
| AWS_REGION        | The region that this application is in                                  |         | true     |
| EMAIL_SENDER      | The sender identity in AWS SES                                          |         | true     |
| DISCORD_BOT_TOKEN | The token of the discord bot                                            |         | true     |

## Local Usage

1. Clone this repo
2. Run `nvm use` to switch to correct node version
3. Make sure `pnpm` is installed
4. Create your own environment variables in `.env` file
5. Run `pnpm install`
6. Run `pnpm start` or `pnpm dryrun`

## How to generate Access tokens for different notification target?

### AWS SES

- Create verified identity in AWS SES console
- Confirm the verification email sent by AWS
- Done!

### Discord

### Telegram
