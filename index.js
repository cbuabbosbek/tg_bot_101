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
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Rasmlar", callback_data: "photos" },
              { text: `Ma'lumot`, callback_data: "info" },
            ],
            [{ text: "Sotib olish", callback_data: "buy" }],
          ],
        },
      });
    }, 1000);
  } else if (text == "Menu 🍔") {
    bot.sendMessage(chatId, "Menyuga xush kelibsiz");
  }

  console.log("Start");
  console.log("Xabar keldi");
});

bot.on("callback_query", function (query) {
  console.log(query);
  const chatId = query.message.chat.id;
  const data = query.data;

  if (data == "buy") {
    bot.sendMessage(
      chatId,
      "Sotib olish uchun $180,000 to'lov qilishga rozimisiz?",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Tasdiqlash ✅", callback_data: "confirm" },
              { text: "Bekor qilish ❌", callback_data: "reject" },
            ],
          ],
        },
      }
    );
  } else if (data == "confirm") {
    bot.sendMessage(chatId, "Tasdiqlandi");
  } else if (data == "reject") {
    bot.sendMessage(chatId, "Bekor qilindi");
  }

  console.log(chatId);
  console.log(data);
});

console.log("Botimiz ishga tushdi");
