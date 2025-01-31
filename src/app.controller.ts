import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/test/:id')
  getHello(@Param('id') id: string): string {
    return `Hello World! - ${id}`;
  }
}
