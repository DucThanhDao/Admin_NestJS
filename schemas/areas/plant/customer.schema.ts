import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Customer>;

@Schema()
export class Customer{
    @Prop({
        unique: true,
    })
    name: string;

    @Prop()
    address: string;
    
    @Prop()
    code: string;
    
    @Prop()
    phone: string;
    
    @Prop()
    email: string;
    
    @Prop()
    tax_number: string;
    
    @Prop()
    address_use: string;
    
    @Prop()
    purpose: string;
    
    @Prop()
    type : string;
    
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

    @Prop()
    timestamp_unix: number;

    @Prop({
        default: 1,
    })
    is_active: number;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);
