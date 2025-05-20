import { ObjectValueType } from '../utils/type.util';

export const OpenAiModelType = {
    GPT_4_1: 'gpt-4.1',
    GPT_4_1_MINI: 'gpt-4.1-mini',
    O3_MINI: 'o3-mini', // cannot input image (save money more than 4o),
} as const;

export type OpenAiModelType = ObjectValueType<typeof OpenAiModelType>;
