import { Module } from '@nestjs/common';

import { PostController } from './controllers/post.controller copy';
import { PostService } from './services/post.service';

// src/modules/content/content.module.ts
@Module({
    controllers: [PostController],
    providers: [PostService],
    exports: [PostService],
})
export class ContentModule {}
