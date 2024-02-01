import { Global, Module } from '@nestjs/common';

import { ConfigService } from './services/config.service';

// src/modules/core/core.module.ts
@Global()
@Module({
    providers: [ConfigService],
    exports: [ConfigService],
})
export class CoreModule {
    // static forRoot(options: { config: RecordAny }): DynamicModule {
    //     return {
    //         module: CoreModule,
    //         global: true,
    //         providers: [
    //             {
    //                 provide: ConfigService,
    //                 useFactory() {
    //                     return new ConfigService(options.config);
    //                 },
    //             },
    //         ],
    //         exports: [ConfigService],
    //     };
    // }
}
