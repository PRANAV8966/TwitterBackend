import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT;
export const MONGO_SERVER_URL = process.env.MONGO_SERVER_URL;
export const JWT_KEY = process.env.JWT_KEY;
export const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
export const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
