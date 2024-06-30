import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { Mixins } from "../../mixins";

export type WarehousesDocuments = Warehouses & Document;

const mixins = new Mixins();

@Schema()
export class Warehouses {
    @Prop({ required: true })
    name: string;

    @Prop({ default: false })
    isArchived: boolean;

    @Prop({ default: [] })
    connectedShopsId: number[];

    @Prop({ default: () => mixins.timeZone()})
    createdAt: Date;

    @Prop({ default: null})
    updatedAt: [Object | Date];
}

export const WarehousesSchema = SchemaFactory.createForClass(Warehouses);