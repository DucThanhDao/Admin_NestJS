import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Plant } from '../plant/plant.schema';
import { DeviceModel } from './deviceModel.schema';
import { Protocol } from './protocol.schema';

export type DeviceDocument = HydratedDocument<Device>;

@Schema()
export class Device {
    @Prop({
        required: true,
        trim: true,
        unique: true,
    })
    code: string;

    @Prop({
        required: true,
        trim: true,
        unique: true,
    })
    name: string;

    @Prop({
        required: false,
    })
    description: string;

    @Prop()
    pStrings: number;
    
    @Prop()
    paras: object;
    
    @Prop()
    manufacture: string;
    
    @Prop()
    model: string;
    
    @Prop()
    version: string;
    
    @Prop({
        required: true,
    })
    type: string;
    
    @Prop()
    SN: string;
    
    @Prop()
    deviceAddress: number;
    
    @Prop()
    nameplateWatts: number;
    
    @Prop()
    is_active: number;
    
    @Prop()
    status: number;
    
    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'deviceModel' 
    })
    device_model: DeviceModel;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Protocol' 
    })
    protocol: Protocol;

    @Prop( 
        {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plant' 
    })
    plant: Plant;

    @Prop({
        default: Date.now,
    })
    created_at: Date;

    @Prop({
        default: Date.now,
    })
    updated_at: Date;
}

export const DeviceSchema = SchemaFactory.createForClass(Device);
