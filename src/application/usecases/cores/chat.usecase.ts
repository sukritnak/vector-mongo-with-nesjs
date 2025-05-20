import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatUsecase {
    // constructor(
    //  OpenAiRepository ?,
    //  InformationRepository,
    // ) {}
    public async handler(text: string, useRag = false): Promise<string> {
        throw new Error(`Not implemented: ${text}, useRag: ${useRag}`);
        /**
         * Instruction to implement
         * 1. Defined system prompt
         * 2. Consider
         *  - useRag ?
         *      if (true get more context from similaritySearchByContent)
         *      userInput concat more context from RAG
         * 3. call openAI
         * - please read what informationRepository do ?
         */
    }
}
