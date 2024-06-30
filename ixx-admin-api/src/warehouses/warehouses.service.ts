import { HttpCode, Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouses, WarehousesDocuments } from "./schemas/warehouses.schema";

@Injectable()
export class WarehousesService {
  constructor(@InjectModel(Warehouses.name) private warehouseModel: Model<WarehousesDocuments>) {
  }

  create(createWarehouseDto: CreateWarehouseDto) {
    return createWarehouseDto;
  }

  @HttpCode(205)
  async findAll() {
    return this.warehouseModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} warehouse`;
  }

  update(id: number, updateWarehouseDto: UpdateWarehouseDto) {
    return `This action updates a #${id} warehouse`;
  }

  remove(id: number) {
    return `This action removes a #${id} warehouse`;
  }
}
