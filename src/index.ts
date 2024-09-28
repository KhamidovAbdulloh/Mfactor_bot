import mongoose from 'mongoose';
import bot from './bot';
import {
  PORT,
  BOT_TOKEN,
  DATABASE_NAME,
  DATABASE_PASSWORD,
  DATABASE_URI,
  DATABASE_USER
} from './config';
import express from 'express';
import { webhookCallback } from 'grammy';
import { link } from './utils/link';

const app = express();
app.use(express.json());

const onStart = () => {
  console.log(
    `Bot started! ${link(
      `@${bot.botInfo.username}`,
      `https://t.me/${bot.botInfo.username}`,
    )}`,
  );
};

const init = async () => {
  await mongoose.connect(DATABASE_URI, {
    user: DATABASE_USER,
    pass: DATABASE_PASSWORD,
    dbName: DATABASE_NAME,
  }).then(() => console.log('MongoDB connected')).catch(err => console.error('MongoDB connection error: ', err));

    bot.init().then(onStart)

    app.post(`/bot/${BOT_TOKEN}`, webhookCallback(bot, 'express'));

    app.listen(PORT, () => console.log(`${PORT} is being used`));
}

init();
