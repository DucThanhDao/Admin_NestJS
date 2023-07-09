import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Device } from './device.schema';

export type PanelDocument = HydratedDocument<Panel>;

@Schema()
export class Panel {
    @Prop()
    producer: string;

    @Prop({
        required: true,
        unique: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    power: number;

    @Prop()
    type: string;

    @Prop()
    __v: string;

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const PanelSchema = SchemaFactory.createForClass(Panel);
