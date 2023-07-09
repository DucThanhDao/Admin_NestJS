import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Device } from './device.schema';
import { Panel } from './panel.schema';

export type StringDocument = HydratedDocument<String>;

@Schema()
export class String {
    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Device',
        required: true,
    })
    device: Device;

    
    @Prop({
        required: true,
        unique: true,
    })
    name: string;
    
    @Prop({
        required: true,
    })
    pv_module: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Panel', //ref to current model schema
        required: true,
    })
    panel_type: Panel;

    @Prop()
    __v: string;

    @Prop({
        default: Date.now,
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const StringSchema = SchemaFactory.createForClass(String);
