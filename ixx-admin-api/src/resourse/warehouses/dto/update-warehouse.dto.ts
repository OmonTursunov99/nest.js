import { PartialType } from '@nestjs/mapped-types';
import { CreateWarehouseDto } from './create-warehouse.dto';
import { Moment } from "moment-timezone";


export class UpdateWarehouseDto extends PartialType(CreateWarehouseDto) {
    updatedAt: Moment;
    createdAt: undefined;
}
