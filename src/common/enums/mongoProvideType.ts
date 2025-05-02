import { ObjectValueType } from '../utils/type.util';

export const MongoProvideName = {
    InformationRepository: 'InformationRepository',
} as const;

export type MongoProvideName = ObjectValueType<typeof MongoProvideName>;
