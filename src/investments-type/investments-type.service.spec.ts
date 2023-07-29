import { Test, TestingModule } from '@nestjs/testing';
import { InvestmentsTypeService } from './investments-type.service';

describe('InvestmentsTypeService', () => {
  let service: InvestmentsTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvestmentsTypeService],
    }).compile();

    service = module.get<InvestmentsTypeService>(InvestmentsTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
