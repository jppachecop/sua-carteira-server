import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContributionsController } from './contributions/contributions.controller';
import { InvestmentsTypeModule } from './investments-type/investments-type.module';

@Module({
  imports: [InvestmentsTypeModule],
  controllers: [AppController, ContributionsController],
  providers: [AppService],
})
export class AppModule {}
