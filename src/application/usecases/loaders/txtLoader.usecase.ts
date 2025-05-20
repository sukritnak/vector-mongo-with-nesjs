import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class TxtLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        // or use TextLoader (langchain/document_loaders/fs/text)
        const content = await readFile(filePath, 'utf8');
        return [new Document({ pageContent: content, metadata: { source: filePath } })];
    }
}
