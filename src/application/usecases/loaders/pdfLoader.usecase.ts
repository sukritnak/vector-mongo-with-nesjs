import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';
import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PdfLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        const loader = new PDFLoader(filePath);
        const result = await loader.load();

        return result.map(
            (r) =>
                new Document({
                    pageContent: r.pageContent,
                    metadata: !!r.metadata ? r.metadata : { source: filePath },
                }),
        );
    }
}
