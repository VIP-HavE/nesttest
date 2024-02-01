import {
    Controller,
    Get,
    Query,
    Param,
    Post,
    Body,
    Patch,
    Delete,
} from '@nestjs/common/decorators';
import { ParseUUIDPipe } from '@nestjs/common/pipes';

import { PaginateOptions } from '@/modules/database/types';

import { PostService } from '../services';

// src/modules/content/controllers/post.controller.ts
@Controller('posts')
export class PostController {
    constructor(protected service: PostService) {}

    @Get()
    async list(
        @Query()
        options: PaginateOptions,
    ) {
        return this.service.paginate(options);
    }

    @Get(':id')
    async detail(
        @Param('id', new ParseUUIDPipe())
        id: string,
    ) {
        return this.service.detail(id);
    }

    @Post()
    async store(
        @Body()
        data: Record<string, any>,
    ) {
        return this.service.create(data);
    }

    @Patch()
    async update(
        @Body()
        data: Record<string, any>,
    ) {
        return this.service.update(data);
    }

    @Delete(':id')
    async delete(@Param('id', new ParseUUIDPipe()) id: string) {
        return this.service.delete(id);
    }
}