import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    getHello(): string {
        console.log('xixihaha1');
        console.log('xixihaha2');
        console.log('xixihaha3');
        return this.appService.getHello();
    }
}
