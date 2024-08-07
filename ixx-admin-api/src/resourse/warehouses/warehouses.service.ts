import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from 'mongoose';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';
import { Warehouses, WarehousesDocuments } from "./schemas/warehouses.schema";
import { TimezoneProvider } from "../../providers/timezone.provider";


@Injectable()
export class WarehousesService {
    constructor(
        @InjectModel(Warehouses.name) private warehouseModel: Model<WarehousesDocuments>,
        private timezoneProvider: TimezoneProvider,
    ) {}

    async create(createWarehouseDto: CreateWarehouseDto) {
        const newElement = new this.warehouseModel(createWarehouseDto);
        return newElement.save();
    }

    async findAll(): Promise<Warehouses[]> {
        return this.warehouseModel.find().exec();
    }

    async findOne(id: string): Promise<Warehouses> {
        return this.warehouseModel.findById(id);
    }

    async update(id: string, updateWarehouseDto: UpdateWarehouseDto): Promise<Warehouses> {
        updateWarehouseDto.updatedAt = this.timezoneProvider.getMomentTz();

        console.info("updateWarehouseDto", updateWarehouseDto);

        return await this.warehouseModel
            .findByIdAndUpdate(id, updateWarehouseDto, { new: true })
            .exec();
    }

    async remove(id: string): Promise<Warehouses> {
        return this.warehouseModel.findByIdAndDelete(id);
    }
}
