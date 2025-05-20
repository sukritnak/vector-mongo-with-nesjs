import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateInformationFromPathFileUsecase {
    // constructor(
    //     Loader ?
    //     Splitter ?
    //     InformationRepository
    // ) {}
    async handler(pathFile: string): Promise<void> {
        throw new Error(`Not implemented: ${pathFile}`);

        /**
         * Instruction to implement
         * 0. check pathFile is exist (and is file)
         * 1. load file
         * 2. split file
         * 3. loop to create information (use InformationFactory must have metadata)
         * 4. save information
         */
    }
}
