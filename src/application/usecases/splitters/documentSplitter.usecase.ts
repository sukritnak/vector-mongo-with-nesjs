import { Document } from '@langchain/core/documents';
import { Injectable } from '@nestjs/common';

import { CHUNKER } from '../../../common/utils/chunker.util';
import { CLEAN_TEXT } from '../../../common/utils/cleanText.util';

@Injectable()
export class DocumentSplitterUsecase {
    async handler(docs: Document[]): Promise<{ text: string; metadata: Record<string, string> }[]> {
        const splitDocs = await CHUNKER.splitDocuments(docs);
        return splitDocs.map((doc) => ({ text: CLEAN_TEXT(doc.pageContent), metadata: doc.metadata }));
    }
}
