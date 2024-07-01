import { Module } from '@nestjs/common';
import { WarehousesService } from './warehouses.service';
import { WarehousesController } from './warehouses.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { Warehouses, WarehousesSchema } from "./schemas/warehouses.schema";
import { TimezoneModule } from "../../modules/timezone.module";

@Module({
  controllers: [WarehousesController],
  providers: [WarehousesService],
  imports: [
      TimezoneModule,
      MongooseModule.forFeature([
        {name: Warehouses.name, schema: WarehousesSchema}
      ])
  ],
})
export class WarehousesModule {}
