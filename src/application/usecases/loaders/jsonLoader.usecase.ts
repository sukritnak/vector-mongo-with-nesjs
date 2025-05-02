import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';
import { readFile } from 'fs/promises';

@Injectable()
export class JsonLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        const raw = await readFile(filePath, 'utf8');
        const data = JSON.parse(raw);

        const texts: string[] = [];

        const traverse = (obj: unknown) => {
            if (typeof obj === 'string') texts.push(obj);
            else if (typeof obj === 'object') {
                for (const key in obj) traverse(obj[key]);
            }
        };

        traverse(data);

        return texts.map((text) => new Document({ pageContent: text, metadata: { source: filePath } }));
    }
}
