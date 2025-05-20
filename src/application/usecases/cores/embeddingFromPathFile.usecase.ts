import { Injectable } from '@nestjs/common';

@Injectable()
export class EmbeddingFromPathFileUsecase {
    async handler(pathFile: string): Promise<void> {
        console.log(pathFile);
        throw Error('Not implement');
    }
}
