import { ObjectValueType } from '../utils/type.util';

export const LLMProvideName = {
    OpenAiEmbeddingRepository: 'OpenAiEmbeddingRepository',
    OpenAILlmRepositoryGateway: 'OpenAILlmRepositoryGateway',
} as const;

export type LLMProvideName = ObjectValueType<typeof LLMProvideName>;
