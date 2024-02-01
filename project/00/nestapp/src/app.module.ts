// src/app.module.ts

import { Module } from '@nestjs/common/decorators';

import { database } from './config';
import { ContentModule } from './modules/content/content.module';
import { CoreModule } from './modules/core/core.module';
import { DatabaseModule } from './modules/database/database.module';
import { CoreModule } from './modules/core/core.module';
import { DatabaseModule } from './modules/database/database.module';
import { CoreModule } from './modules/core/core.module';

@Module({
    imports: [ContentModule, CoreModule.forRoot(), DatabaseModule.forRoot(database), CoreModule, DatabaseModule],
    providers: [],
})
export class AppModule {}
