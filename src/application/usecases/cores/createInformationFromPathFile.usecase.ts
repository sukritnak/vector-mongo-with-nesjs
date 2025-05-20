import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { promises as fs } from 'fs';

import { MongoProvideName as Provide } from '../../../common/enums/mongoProvideType';
import { InformationFactory } from '../../factories/information.factory';
import { InformationRepository } from '../../ports/information/information.repository';
import { DynamicFileLoaderUsecase } from '../loaders/dynamicFileLoader.usecase';
import { DocumentSplitterUsecase } from '../splitters/documentSplitter.usecase';
@Injectable()
export class CreateInformationFromPathFileUsecase {
    constructor(
        private readonly dynamicFileLoaderUsecase: DynamicFileLoaderUsecase,
        private readonly documentSplitterUsecase: DocumentSplitterUsecase,
        @Inject(Provide.InformationRepository)
        private readonly informationRepository: InformationRepository,
    ) {}
    public async handler(pathFile: string): Promise<void> {
        await this.checkFileValid(pathFile);

        const documents = await this.dynamicFileLoaderUsecase.handler(pathFile);
        const splitDocuments = await this.documentSplitterUsecase.handler(documents);
        await Promise.all(
            splitDocuments.map((document) => {
                const information = InformationFactory.create({
                    content: document.text,
                    metadata: document.metadata,
                });
                return this.informationRepository.create(information);
            }),
        );
    }

    private async checkFileValid(pathFile: string) {
        try {
            const stats = await fs.stat(pathFile);
            if (!stats.isFile()) {
                throw new NotFoundException(`Path is not a file: ${pathFile}`);
            }
            return true;
        } catch (error) {
            if (error.code === 'ENOENT') {
                throw new NotFoundException(`File does not exist: ${pathFile}`);
            }
            throw error;
        }
    }
}
