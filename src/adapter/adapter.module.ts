import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { ConfigToken } from '../configs/config.interface';
import { AppController } from './inbound/controllers/app.controller';
import {
    llmProvideName,
    llmProviderRepository,
    modelDefinitions,
    mongoProvideName,
    mongoProviderRepository,
} from './outbound/repositories';

@Global()
@Module({
    imports: [
        MongooseModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get(ConfigToken.mongoUri),
            }),
        }),
        MongooseModule.forFeature(modelDefinitions),
    ],
    providers: [...llmProviderRepository, ...mongoProviderRepository],
    exports: [...llmProvideName, ...mongoProvideName],
    controllers: [AppController],
})
export class AdapterModule {}
