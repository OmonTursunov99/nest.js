import { Controller, Get, Post, Body, Put, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { CreateWarehouseDto } from './dto/create-warehouse.dto';
import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Controller('warehouses')
export class WarehousesController {
    constructor(private readonly warehousesService: WarehousesService) {
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createWarehouseDto: CreateWarehouseDto) {
        return this.warehousesService.create(createWarehouseDto);
    }

    @Get()
    findAll() {
        return this.warehousesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.warehousesService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateWarehouseDto: UpdateWarehouseDto) {
        return this.warehousesService.update(id, updateWarehouseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.warehousesService.remove(id);
    }
}
