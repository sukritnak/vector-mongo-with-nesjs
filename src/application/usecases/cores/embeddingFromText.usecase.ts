import { Injectable } from '@nestjs/common';

@Injectable()
export class EmbeddingFromTextUsecase {
    async handler(text: string): Promise<void> {
        console.log(text);
        throw Error('Not implement');
    }
}
