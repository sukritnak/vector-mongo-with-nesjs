import { Injectable } from '@nestjs/common';

import { CHUNKER } from '../../../common/utils/chunker.util';
import { CLEAN_TEXT } from '../../../common/utils/cleanText.util';
@Injectable()
export class TextSplitterUsecase {
    async handler(text: string): Promise<string[]> {
        const splitTexts = await CHUNKER.splitText(text);
        return splitTexts.map((chunk) => CLEAN_TEXT(chunk));
    }
}
