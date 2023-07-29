import { Module } from '@nestjs/common';
import { InvestmentsTypeService } from './investments-type.service';
import { InvestmentsTypeController } from './investments-type.controller';

@Module({
  controllers: [InvestmentsTypeController],
  providers: [InvestmentsTypeService]
})
export class InvestmentsTypeModule {}
