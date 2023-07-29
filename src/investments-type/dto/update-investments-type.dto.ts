import { PartialType } from '@nestjs/mapped-types';
import { CreateInvestmentsTypeDto } from './create-investments-type.dto';

export class UpdateInvestmentsTypeDto extends PartialType(CreateInvestmentsTypeDto) {}
