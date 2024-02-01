// src/modules/example/services/fifth.service.ts

import { Injectable, Inject, forwardRef } from '@nestjs/common';

import { SixthService } from './sixth.service';

@Injectable()
export class FifthService {
    constructor(
        @Inject(forwardRef(() => SixthService))
        protected sixth: WrapperType<SixthService>,
    ) {}

    circular() {
        return `循环依赖1
        
        ${this.sixth.circular()}`;
    }
}
