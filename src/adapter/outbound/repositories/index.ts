import { Provider } from '@nestjs/common';
import { ModelDefinition } from '@nestjs/mongoose';

import { LLMProvideName } from '../../../common/enums/llmProvideType';
import { MongoProvideName } from '../../../common/enums/mongoProvideType';
import { OpenAiEmbeddingRepository } from './core/openAiEmbedding.repository';
import { InformationRepositoryMongo } from './information/information.repository.mongo';
import { InformationSchema, InformationSchemaMongo } from './information/schemas/information.schema';

export const llmProviderRepository: Provider[] = [
    {
        provide: LLMProvideName.OpenAiEmbeddingRepository,
        useClass: OpenAiEmbeddingRepository,
    },
    // {
    //     provide: LLMProvideName.OpenAILlmRepositoryGateway,
    //     useClass: OpenAILlmRepositoryGateway,
    // },
];

export const mongoProviderRepository: Provider[] = [
    {
        provide: MongoProvideName.InformationRepository,
        useClass: InformationRepositoryMongo,
    },
];

export const mongoProvideName = [MongoProvideName.InformationRepository];
export const llmProvideName = [
    LLMProvideName.OpenAiEmbeddingRepository,
    // LLMProvideName.OpenAILlmRepositoryGateway
];

export const modelDefinitions: ModelDefinition[] = [
    {
        name: InformationSchemaMongo.name,
        schema: InformationSchema,
    },
];
