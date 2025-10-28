import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8415282558:AAFhRN-qCJ7Bz3enueyC3S2LNpOGKAnQM-M";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", function (msg) {
  const chatId = msg.chat.id;
  const text = msg.text;

  bot.sendMessage(chatId, `Salom --> ${text}`);
  console.log("Xabar keldi");
  console.log(msg);
});

console.log("Botimiz ishga tushdi");
