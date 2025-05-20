import { AllCoresUsecases } from './cores';
import { AllLoaderUsecases } from './loaders';
import { AllSplitterUsecases } from './splitters';

export const AllUsecases = [...AllCoresUsecases, ...AllLoaderUsecases, ...AllSplitterUsecases];
