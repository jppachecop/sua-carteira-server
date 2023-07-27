import { Controller, Get } from '@nestjs/common';

@Controller('contributions')
export class ContributionsController {
  @Get()
  getContributions(): string {
    return 'Contributions';
  }
}
