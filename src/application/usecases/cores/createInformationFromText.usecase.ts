import { Inject, Injectable } from '@nestjs/common';

import { MongoProvideName as Provide } from '../../../common/enums/mongoProvideType';
import { InformationFactory } from '../../factories/information.factory';
import { InformationRepository } from '../../ports/information/information.repository';
import { TextSplitterUsecase } from '../splitters/textSplitter.usecase';

@Injectable()
export class CreateInformationFromTextUsecase {
    constructor(
        private readonly textSplitterUsecase: TextSplitterUsecase,
        @Inject(Provide.InformationRepository)
        private readonly informationRepository: InformationRepository,
    ) {}
    public async handler(text: string): Promise<void> {
        const splitTexts = await this.textSplitterUsecase.handler(text);

        await Promise.all(
            splitTexts.map((text) => {
                const information = InformationFactory.create({ content: text });
                return this.informationRepository.create(information);
            }),
        );
    }
}
