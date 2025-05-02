import { ConfigProps } from './config.interface';

export const config = (): ConfigProps => ({
    mongoUri: process.env.MONGO_DB_URL,
    openaiApiKey: process.env.OPENAI_API_KEY,
});
