import { ObjectValueType } from '../common/utils/type.util';

export interface ConfigProps {
    mongoUri: string;
    openaiApiKey: string;
}

export const ConfigToken = {
    mongoUri: 'mongoUri',
    openaiApiKey: 'openaiApiKey',
} as const;

export type ConfigToken = ObjectValueType<typeof ConfigToken>;
