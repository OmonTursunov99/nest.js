import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { TimezoneProvider } from "../../../providers/timezone.provider";

export type WarehousesDocuments = Warehouses & Document;


@Schema()
export class Warehouses {
    timezoneProvider = new TimezoneProvider;

    @Prop({ required: true })
    name: string;

    @Prop({ default: false })
    isArchived: boolean;

    @Prop({ default: [] })
    connectedShopsId: number[];

    @Prop({ default: null })
    createdAt: [ Object ];

    @Prop({ default: null })
    updatedAt: [ Object ];
}

export const WarehousesSchema = SchemaFactory.createForClass(Warehouses);