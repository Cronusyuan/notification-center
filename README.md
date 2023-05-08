# Notification Center Spike

A spike project to investigate how to integrate Paraspace events with Discord API/ Telegram API/ Email

## Requirements

1.

## Configuration

This bot is configured by environment variables. Before you running it, please make sure you have prepared the requirements mentioned above.

| Environment | Description                                                                                   | Default | Required |
| ----------- | --------------------------------------------------------------------------------------------- | ------- | -------- |
| DRY_RUN     | In dry run mode bot will not send tweets and only fetch events in the most recent batch block | false   | false    |

## Local Usage

1. Clone this repo
2. Run `nvm use` to switch to correct node version
3. Make sure `pnpm` is installed
4. Create your own environment variables in `.env` file
5. Run `pnpm install`
6. Run `pnpm start` or `pnpm dryrun`

## How to generate Access tokens for different notification target?

### Discord

### Telegram

### AWS SES
