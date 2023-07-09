import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Plant } from './plant.schema';
export type BillingConfigDocument = HydratedDocument<BillingConfig>;

@Schema()
export class BillingConfig{
    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plant',
    })
    plant: Plant;

    @Prop({
        trim: true
    })
    plant_name: string;

    @Prop()
    price_30: number;

    @Prop()
    price_20: number;

    @Prop()
    price_10: number;

    @Prop()
    tax: number;

    @Prop()
    vat: number;

    @Prop()
    discount: number;

    @Prop()
    infor: string;

    @Prop()
    timestamp: Date;

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop({
        default: Date.now
    })
    updated_at: Date;

}

export const BillingConfigSchema = SchemaFactory.createForClass(BillingConfig);
