import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import {User} from '../../authorization/user.schema'

export type SupplierDocument = HydratedDocument<Supplier>;

@Schema()
export class Supplier {
    @Prop({
        unique: true,
    })
    name: string;

    @Prop()
    group: string;
    
    @Prop()
    code: string;
    
    @Prop()
    tax_number: string;
    
    @Prop()
    address: string;
    
    @Prop()
    contact: string;
    
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

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User' 
        }]
    })
    users: User[];
}
export const SupplierSchema = SchemaFactory.createForClass(Supplier);
