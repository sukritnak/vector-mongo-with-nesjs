import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';
import pdfParse from 'pdf-parse';

@Injectable()
export class PdfLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        const dataBuffer = await readFile(filePath);
        const pdf = await pdfParse(dataBuffer);
        return [new Document({ pageContent: pdf.text, metadata: { source: filePath } })];
    }
}
