import { DocumentLoaderService } from './dynamicFileLoader.usecase';
import { JsonLoaderUsecase } from './jsonLoader.usecase';
import { PdfLoaderUsecase } from './pdfLoader.usecase';
import { TxtLoaderUsecase } from './txtLoader.usecase';

export const AllLoaderUsecases = [DocumentLoaderService, JsonLoaderUsecase, PdfLoaderUsecase, TxtLoaderUsecase];
