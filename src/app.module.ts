import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContributionsController } from './contributions/contributions.controller';

@Module({
  imports: [],
  controllers: [AppController, ContributionsController],
  providers: [AppService],
})
export class AppModule {}
