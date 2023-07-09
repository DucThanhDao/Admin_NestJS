import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { User } from '../../authorization/user.schema';
import { Site } from '../site/site.schema';
import {Device} from '../device/device.schema';
import {Supplier} from './supplier.schema';
import {Customer} from './customer.schema';

export type PlantDocument = HydratedDocument<Plant>;

@Schema()
export class Plant {
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

    @Prop()
    description: string;

    @Prop()
    commissioningOn: string;
    
    @Prop()
    address: string;
    
    @Prop()
    modules: string;
    
    @Prop()
    southOrientation: string;
    
    @Prop()
    tilt: string;
    
    @Prop()
    inverter: string;
    
    @Prop()
    capacity: number;
    
    @Prop()
    pArray: number;

    @Prop()
    lat: number;

    @Prop()
    lng: number;

    @Prop()
    is_active: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Site'
    })
    site: Site;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Device'
        }]
    })
    devices: Device[];

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    })
    users: User[];

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Suplier'
    })
    suplier: Supplier;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
    })
    customer: Customer;
}
export const PlantSchema = SchemaFactory.createForClass(Plant);
