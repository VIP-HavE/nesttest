import { Injectable } from '@nestjs/common';

import { ThirdService } from './third.service';

// src/modules/example/services/fourth.service.ts
@Injectable()
export class FourthService {
    constructor(private third: ThirdService) {}

    getContent() {
        return this.third.useFactory();
    }

    async getPromise() {
        return new Promise((resovle) => {
            setTimeout(() => {
                resovle(this.third);
            }, 100);
        });
    }
}
