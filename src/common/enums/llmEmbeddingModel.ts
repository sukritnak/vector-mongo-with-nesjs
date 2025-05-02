import { ObjectValueType } from '../utils/type.util';

export const LLMEmbeddingModel = {
    textEmbedding3Small: 'text-embedding-3-small', // 256 dimensions - 1536 tokens
    textEmbedding3Large: 'text-embedding-3-large', // 256 dimensions - 3072 tokens
    textEmbeddingAda002: 'text-embedding-ada-002', // 1532
} as const;

export type LLMEmbeddingModel = ObjectValueType<typeof LLMEmbeddingModel>;
