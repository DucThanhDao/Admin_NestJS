import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Plant } from './plant.schema';
export type BillingScheduleDocument = HydratedDocument<BillingSchedule>;


@Schema()
export class BillingSchedule {
    @Prop()
    start_day: string;

    @Prop({
        default: 0,
    })
    start_day_premonth: number;
    
    @Prop()
    end_day: string;

    @Prop({
        default: 0,
    })
    end_day_premonth: number;

    @Prop()
    run_day: string;

    @Prop()
    infors: string[];

    
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

    @Prop({
        trim: true,
    })
    plant_name: string;
    
    @Prop({
        trim: true,
    })
    name: string;

    @Prop()
    code: string;

    @Prop()
    timestamp_unix: number;

    @Prop({
        default: 1,
    })
    is_active: number;

    @Prop({
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Plant' 
    })
    plant: Plant;
}

export const BillingScheduleSchema = SchemaFactory.createForClass(BillingSchedule);
