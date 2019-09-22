import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // public endpoint
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // show protected access

  // show protected access with scope A access

  // show protected access with scope B access

}
