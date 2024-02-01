import { BadRequestException, Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateDto } from 'dto/create.dto';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get/:id')
  getHello(@Param('id', ParseIntPipe) id : number): string {
    // return this.appService.getHello();
    if(id < 1){
      throw new BadRequestException('id must be greater then zero');
    }
    return `you enter ${id}`;
  }

  @UsePipes(new ValidationPipe)
  @Post('create')
  create(@Body() createDto: CreateDto){
    return createDto
  }
}
