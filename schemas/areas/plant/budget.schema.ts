import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Plant } from './plant.schema';
export type BudgetDocument = HydratedDocument<Budget>;

@Schema()
export class Budget {
    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Plant'
    })
    plant: Plant;

    @Prop()
    budget_production: number;

    @Prop()
    budget_performance_ratio: number;

    @Prop()
    budget_specific_yield: number;

    @Prop()
    month: string;

    @Prop()
    timestamp_unix: number;

    @Prop()
    plant_name: string;

    @Prop({
        default: Date.now,
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
} 
export const BudgetSchema = SchemaFactory.createForClass(Budget);
