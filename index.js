import TelegramBot from "node-telegram-bot-api";

const TOKEN = "8415282558:AAFhRN-qCJ7Bz3enueyC3S2LNpOGKAnQM-M";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.on("message", async function (msg) {
  console.log(msg);
  const chatId = msg.chat.id;
  const text = msg.text;
  const firstName = msg.chat.first_name;

  if (text == "/start") {
    bot.sendMessage(chatId, `Xush kelibsiz, ${firstName} 👋`, {
      reply_markup: {
        keyboard: [
          [{ text: "Boshlash 🔥" }],
          [{ text: "Menu 🍔" }, { text: "Sozlamalar ⚙️" }],
        ],
        resize_keyboard: true,
      },
    });
  } else if (text == "Boshlash 🔥") {
    const xabar = await bot.sendMessage(chatId, "Iltimos, kuting...");

    setTimeout(function () {
      bot.deleteMessage(chatId, xabar.message_id);
      // bot.sendMessage(chatId, "1 sekund kechikdi");
      bot.sendPhoto(chatId, "./images/urus.jpeg", {
        caption: ` The Urus has a V8 twin-turbocharged engine with a maximum power output of 650 hp, and offers the best power-to-weight ratio in the SUV segment. `,
      });
    }, 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
  }

  console.log("Start");
  console.log("Xabar keldi");
});

console.log("Botimiz ishga tushdi");
