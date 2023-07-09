import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Protocol } from './protocol.schema';

export type DeviceModelDocument = HydratedDocument<DeviceModel>;

@Schema()
export class DeviceModel {
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
    paras_model: object;
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Protocol',
        required: true,
    })
    protocol: Protocol;

    @Prop({
        required: true,
    })
    type: string;
    
    @Prop()
    __v: String;
    
    @Prop({
        default: Date.now
    })
    created_at: Date;
    
    @Prop({
        default: Date.now
    })
    updated_at: Date;
}

export const DeviceModelSchema = SchemaFactory.createForClass(DeviceModel);
