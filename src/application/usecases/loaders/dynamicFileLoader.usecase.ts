import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';

import { JsonLoaderUsecase } from './jsonLoader.usecase';
import { PdfLoaderUsecase } from './pdfLoader.usecase';
import { TxtLoaderUsecase } from './txtLoader.usecase';

@Injectable()
export class DocumentLoaderService {
    constructor(
        private readonly normalLoaderUsecase: TxtLoaderUsecase,
        private readonly pdfLoaderUsecase: PdfLoaderUsecase,
        private readonly jsonLoaderUsecase: JsonLoaderUsecase,
    ) {}

    async handler(filePath: string): Promise<Document[]> {
        const ext = filePath.split('.').pop()?.toLowerCase();

        switch (ext) {
            case 'txt':
            case 'md':
                return this.normalLoaderUsecase.handler(filePath);
            case 'pdf':
                return this.pdfLoaderUsecase.handler(filePath);
            case 'json':
                return this.jsonLoaderUsecase.handler(filePath);
            default:
                throw new Error(`Unsupported file type: ${ext}`);
        }
    }
}
