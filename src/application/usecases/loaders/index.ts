import { DynamicFileLoaderUsecase } from './dynamicFileLoader.usecase';
import { JsonLoaderUsecase } from './jsonLoader.usecase';
import { PdfLoaderUsecase } from './pdfLoader.usecase';
import { TxtLoaderUsecase } from './txtLoader.usecase';

export const AllLoaderUsecases = [DynamicFileLoaderUsecase, JsonLoaderUsecase, PdfLoaderUsecase, TxtLoaderUsecase];
