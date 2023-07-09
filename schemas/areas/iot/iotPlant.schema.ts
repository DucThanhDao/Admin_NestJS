import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Plant } from '../plant/plant.schema';
import { Device } from '../device/device.schema';
import { Iot } from './iot.schema';

export type IotPlantDocument = HydratedDocument<IotPlant>;
@Schema()
export class IotPlant {
    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref: 'Iot',
        required: true,
    })
    iot: Iot;

    @Prop()
    iot_code: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, ref: 'Plant',
        required: true,
    })
    plant: Plant;

    @Prop()
    plant_code: string;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Device'
        }],
        required: true,
    })
    devices: Device[];

    @Prop()
    infor: string;

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}
export const IotPlantSchema = SchemaFactory.createForClass(IotPlant);
