// server.js
require('dotenv').config();
const express = require('express');
const bot = require('./src/bot');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Bot webhook endpointi
app.post(`/bot${process.env.BOT_TOKEN}`, (req, res) => {
  bot.processUpdate(req.body);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});