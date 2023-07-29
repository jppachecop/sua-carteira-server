import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsTypeController } from './investments-type.controller';
import { InvestmentsTypeService } from './investments-type.service';

describe('InvestmentsTypeController', () => {
  let controller: InvestmentsTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvestmentsTypeController],
      providers: [InvestmentsTypeService],
    }).compile();

    controller = module.get<InvestmentsTypeController>(InvestmentsTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
