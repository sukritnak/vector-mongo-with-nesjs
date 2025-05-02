import { OpenAIEmbeddings } from '@langchain/openai';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { EmbeddingDimensions, EmbeddingRepository } from '../../../../application/ports/core/embedding.repository';
import { LLMEmbeddingModel } from '../../../../common/enums/llmEmbeddingModel';
import { ConfigToken } from '../../../../configs/config.interface';

@Injectable()
export class OpenAiEmbeddingRepository implements EmbeddingRepository {
    constructor(private readonly configService: ConfigService) {}

    private getModel(dimensions: EmbeddingDimensions, modelName: LLMEmbeddingModel) {
        const openaiApiKey = this.configService.get<string>(ConfigToken.openaiApiKey);
        return new OpenAIEmbeddings({
            modelName,
            dimensions,
            apiKey: openaiApiKey,
        });
    }

    public async embed(
        texts: string[],
        dimensions: EmbeddingDimensions,
        modelName: LLMEmbeddingModel,
    ): Promise<number[][]> {
        return this.getModel(dimensions, modelName).embedDocuments(texts);
    }

    public async embedQuery(
        text: string,
        dimensions: EmbeddingDimensions,
        modelName: LLMEmbeddingModel,
    ): Promise<number[]> {
        return this.getModel(dimensions, modelName).embedQuery(text);
    }
}
