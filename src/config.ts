import dotenv from 'dotenv';
dotenv.config();

export const PORT = +(process.env.PORT || 3000);
export const BOT_TOKEN = process.env.BOT_TOKEN as string;

export const DATABASE_URI = process.env.DATABASE_URI as string;
export const DATABASE_USER = process.env.DATABASE_USER as string;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD as string;
export const DATABASE_NAME = process.env.DATABASE_NAME as string;
