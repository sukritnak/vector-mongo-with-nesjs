import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AdapterModule } from './adapter/adapter.module';
import { AppController } from './adapter/inbound/controllers/app.controller';
import { ApplicationModule } from './application/application.module';
import { config } from './configs/configuration';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config],
        }),
        AdapterModule,
        ApplicationModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
