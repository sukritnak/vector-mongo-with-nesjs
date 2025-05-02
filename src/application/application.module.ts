import { Global, Module } from '@nestjs/common';

import { AllUsecases } from './usecases';

@Global()
@Module({
    providers: [...AllUsecases],
    exports: [...AllUsecases],
})
export class ApplicationModule {}
