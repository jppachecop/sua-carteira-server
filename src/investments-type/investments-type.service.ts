import { Injectable } from '@nestjs/common';
import { CreateInvestmentsTypeDto } from './dto/create-investments-type.dto';
import { UpdateInvestmentsTypeDto } from './dto/update-investments-type.dto';
import { InvestmentsType } from './interfaces/investments-type.interface';

@Injectable()
export class InvestmentsTypeService {
  private investmentsType: InvestmentsType[] = [];

  create(createInvestmentsTypeDto: CreateInvestmentsTypeDto) {
    this.investmentsType.push(createInvestmentsTypeDto);

    return 'This action adds a new investmentsType';
  }

  findAll() {
    return `This action returns all investmentsType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} investmentsType`;
  }

  update(id: number, updateInvestmentsTypeDto: UpdateInvestmentsTypeDto) {
    return `This action updates a #${id} investmentsType`;
  }

  remove(id: number) {
    return `This action removes a #${id} investmentsType`;
  }
}
