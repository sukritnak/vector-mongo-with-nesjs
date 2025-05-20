import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';
// import { JSONLoader } from 'langchain/document_loaders/fs/json';
import { readFile } from 'fs/promises';
import { ObjectPageContent } from 'src/common/utils/jsonObject.util';

@Injectable()
export class JsonLoaderUsecase {
    async handler(filePath: string): Promise<Document[]> {
        const raw = await readFile(filePath, 'utf8');
        const data = JSON.parse(raw);
        return data.map(
            (r) =>
                new Document({
                    pageContent: ObjectPageContent(r),
                    metadata: { source: filePath },
                }),
        );
    }
    /**
     * This data not good for me
     */
    // async handler(filePath: string): Promise<Document[]> {
    //     const loader = new JSONLoader(filePath);
    //     const result = await loader.load();
    //     return result.map(
    //         (r) =>
    //             new Document({
    //                 pageContent: r.pageContent,
    //                 metadata: !!r.metadata ? r.metadata : { source: filePath },
    //             }),
    //     );
    // }
}
