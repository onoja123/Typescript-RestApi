import dotenv from 'dotenv';

dotenv.config();

const MONGO_URL = 'mongodb+srv://franca:Gabriella12@cluster0.531ojj9.mongodb.net/?retryWrites=true&w=majority';

const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 1337;

export const config = {
    mongo: {
        url: MONGO_URL
    },
    server: {
        port: SERVER_PORT
    }
};
