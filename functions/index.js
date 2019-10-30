const Telegraf = require('telegraf');
const functions = require('firebase-functions');

const biwabitbot = new Telegraf(functions.config().telegrambot.key);

biwabitbot.hears('hi', (ctx) => ctx.reply('Hey there'));
biwabitbot.launch();

exports.biwabitbot = functions.https.onRequest((req, res) => {
  biwabitbot.handleUpdate(req.body, res);
})
