import { Injectable, Inject, forwardRef } from '@nestjs/common';

import { FifthService } from './fifth.service';

// src/modules/example/services/sixth.service.ts
@Injectable()
export class SixthService {
    constructor(
        @Inject(forwardRef(() => FifthService))
        protected fifth: WrapperType<FifthService>,
    ) {}

    circular() {
        return `循环依赖2`;
    }
}
