module.exports = (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Qanday yordam kerak?');
  };