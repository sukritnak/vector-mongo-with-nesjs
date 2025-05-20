import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateInformationFromTextUsecase {
    // constructor(
    //  Splitter ?,
    //  InformationRepository,
    // ) {}
    public async handler(text: string): Promise<void> {
        throw new Error(`Not implemented: ${text}`);
        /**
         * Instruction to implement
         * 1. split text
         * 2. loop to create information (use InformationFactory)
         * - please read what informationRepository do ?
         */
    }
}
