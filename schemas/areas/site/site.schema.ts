import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Portfolio } from '../portfolio/portfolio.schema';
import { User } from '../../authorization/user.schema';
import {Plant} from '../plant/plant.schema';

export type SiteDocument = HydratedDocument<Site>;

@Schema()
export class Site {
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
    unit_price_td: number;
    
    @Prop()
    unit_price_bt: number;
    
    @Prop()
    unit_price_cd: number;
    
    @Prop()
    discount: number;
    
    @Prop()
    vat: number;
    
    @Prop()
    kwh_init: number;
    
    @Prop()
    kwh_sum: number;
    
    @Prop()
    price_init: number;
    
    @Prop()
    price_sum: number;
    
    @Prop()
    currency: string;
    
    @Prop()
    is_active: number;
    
    @Prop()
    status: string;

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Portfolio'
    })
    porfolio: Portfolio;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId, ref: 'Plant'
        }]
    })
    plants: Plant;

    @Prop({
        type: [
            {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
        ]
    })
    users: User[];

    @Prop({
        default: Date.now,
    })
    created_at: Date;
}

export const SiteSchema = SchemaFactory.createForClass(Site);
