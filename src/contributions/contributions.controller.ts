import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('contributions')
export class ContributionsController {
  @Post()
  @HttpCode(200)
  createContributions(): string {
    return 'This action adds a contribution';
  }

  @Get()
  getContributions(@Req() request: Request): string {
    return 'get contributions';
  }

  @Get(':id')
  getContribution(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} contribution`;
  }
}
