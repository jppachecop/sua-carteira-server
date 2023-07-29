import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvestmentsTypeService } from './investments-type.service';
import { CreateInvestmentsTypeDto } from './dto/create-investments-type.dto';
import { UpdateInvestmentsTypeDto } from './dto/update-investments-type.dto';

@Controller('investments-type')
export class InvestmentsTypeController {
  constructor(private readonly investmentsTypeService: InvestmentsTypeService) {}

  @Post()
  create(@Body() createInvestmentsTypeDto: CreateInvestmentsTypeDto) {
    return this.investmentsTypeService.create(createInvestmentsTypeDto);
  }

  @Get()
  findAll() {
    return this.investmentsTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.investmentsTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInvestmentsTypeDto: UpdateInvestmentsTypeDto) {
    return this.investmentsTypeService.update(+id, updateInvestmentsTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.investmentsTypeService.remove(+id);
  }
}
