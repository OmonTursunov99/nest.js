import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type WarehousesDocuments = Warehouses & Document;

@Schema()
export class Warehouses {
    @Prop({ required: true })
    name: string;

    @Prop({ default: false })
    isArchived: boolean;

    @Prop({ default: [] })
    connectedShopsId: number[];

    @Prop({ default: Date.now})
    createdAt: Date;

    @Prop({ default: null})
    updatedAt: [Object | Date];
}

export const WarehousesSchema = SchemaFactory.createForClass(Warehouses);