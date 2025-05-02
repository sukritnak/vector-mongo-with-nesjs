import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { EmbeddingRepository } from '../../../../application/ports/core/embedding.repository';
import { InformationRepository } from '../../../../application/ports/information/information.repository';
import { LLMEmbeddingModel } from '../../../../common/enums/llmEmbeddingModel';
import { LLMProvideName } from '../../../../common/enums/llmProvideType';
import { Information } from '../../../../domain/model/information.model';
import { InformationEntity } from './information.entity';
import { InformationMapper } from './mapper/information.mapper';
import { InformationIndex, InformationSchemaMongo } from './schemas/information.schema';

/**
 * @description contentEmbedding will be generated from content
 */
@Injectable()
export class InformationRepositoryMongo implements InformationRepository {
    constructor(
        @InjectModel(InformationSchemaMongo.name)
        private readonly informationModel: Model<InformationSchemaMongo>,
        @Inject(LLMProvideName.OpenAiEmbeddingRepository)
        private readonly embeddingRepository: EmbeddingRepository,
    ) {}

    private filterScore<T>(score: number, result: T[]): T[] {
        return result.filter((item) => item['score'] >= score);
    }

    public async create(information: Information): Promise<void> {
        const contentEmbedding = await this.embeddingRepository.embed(
            [information.content],
            3072,
            LLMEmbeddingModel.textEmbedding3Small,
        );

        await this.informationModel.create({
            ...information,
            contentEmbedding: [...contentEmbedding],
        });
    }

    public async similaritySearchByContent(content: string): Promise<Information[]> {
        const contentEmbedding = await this.embeddingRepository.embedQuery(
            content,
            3072,
            LLMEmbeddingModel.textEmbedding3Small,
        );

        const result = await this.informationModel.aggregate<InformationEntity>([
            {
                $vectorSearch: {
                    index: InformationIndex,
                    path: 'contentEmbedding',
                    queryVector: contentEmbedding,
                    numCandidates: 100,
                    limit: 4,
                },
            },
            {
                $project: {
                    _id: 0,
                    content: 1,
                    metadata: 1,
                    createdAt: 1,
                    updatedAt: 1,
                    score: {
                        $meta: 'vectorSearchScore',
                    },
                },
            },
        ]);

        const filteredResult = this.filterScore(0.67, result);
        return filteredResult.map((item) => InformationMapper.toDomain(item));
    }
}
