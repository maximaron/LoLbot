const TelegramApi = require("node-telegram-bot-api");

const token = "5810005603:AAEzo3bcEPqmI1oEo1GXPOqiKq-zsTWhIII";

const bot = new TelegramApi(token, { polling: true });

bot.on("message", (msg) => {
  const text = msg.text;
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `Joe wrote ${text}`);
});
