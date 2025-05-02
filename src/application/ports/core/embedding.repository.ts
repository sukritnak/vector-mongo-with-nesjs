import { LLMEmbeddingModel } from '../../../common/enums/llmEmbeddingModel';

export type EmbeddingDimensions = 256 | 512 | 768 | 1536 | 3072;

export interface EmbeddingRepository {
    embed(texts: string[], dimensions: EmbeddingDimensions, modelName: LLMEmbeddingModel): Promise<number[][]>;
    embedQuery(text: string, dimensions: EmbeddingDimensions, modelName: LLMEmbeddingModel): Promise<number[]>;
}
