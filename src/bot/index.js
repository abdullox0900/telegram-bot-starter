const TelegramBot = require('node-telegram-bot-api');
const config = require('../config');
const logger = require('../utils/logger');
const startCommand = require('./commands/start');
const helpCommand = require('./commands/help');

const bot = new TelegramBot(config.BOT_TOKEN, { polling: true });

bot.onText(/\/start/, startCommand);
bot.onText(/\/help/, helpCommand);

bot.on('message', (msg) => {
  logger.info(`Received message from ${msg.from.id}: ${msg.text}`);
});

module.exports = bot;