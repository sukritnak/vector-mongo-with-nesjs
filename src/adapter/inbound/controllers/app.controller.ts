import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateInformationFromPathFileUsecase } from 'src/application/usecases/cores/createInformationFromPathFile.usecase';
import { CreateInformationFromTextUsecase } from 'src/application/usecases/cores/createInformationFromText.usecase';

import { CreateInformationWithPathFileRequest } from '../ports/cores/createInformationWithPathFileRequest.dto';
import { CreateInformationWithTextRequest } from '../ports/cores/createInformationWithTextRequest.dto';

@Controller()
export class AppController {
    constructor(
        private readonly createInformationFromPathFileUsecase: CreateInformationFromPathFileUsecase,
        private readonly createInformationFromTextUsecase: CreateInformationFromTextUsecase,
    ) {}

    @Get()
    getHello(): string {
        return 'Hello Vector Session!';
    }

    @Post('information/text-content')
    async createInformationFromTextContent(@Body() { content }: CreateInformationWithTextRequest): Promise<void> {
        await this.createInformationFromTextUsecase.handler(content);
    }

    @Post('information/path-file')
    async createInformationFromPathFile(@Body() { pathFile }: CreateInformationWithPathFileRequest): Promise<void> {
        await this.createInformationFromPathFileUsecase.handler(pathFile);
    }
}
