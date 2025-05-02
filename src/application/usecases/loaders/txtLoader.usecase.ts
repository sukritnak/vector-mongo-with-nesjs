import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

// txt and md can be loaded by this usecase
@Injectable()
export class TxtLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        const content = await readFile(filePath, 'utf8');
        return [new Document({ pageContent: content, metadata: { source: filePath } })];
    }
}
