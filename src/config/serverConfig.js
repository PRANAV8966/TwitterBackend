import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_SERVER_URL = process.env.MONGO_SERVER_URL;
