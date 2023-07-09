import * as mongoose from 'mongoose';
import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose'
import {HydratedDocument} from 'mongoose';
import {User} from '../../authorization/user.schema'
import {Site} from '../site/site.schema'
import { Domain } from 'domain';
export type PortfolioDocument = HydratedDocument<Portfolio>;

@Schema()
export class Portfolio {
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
        trim: true,
    })
    avata_name: string;

    @Prop({
        trim: true,
    })
    avata_file: string;

    @Prop()
    description: string;

    @Prop()
    is_active: number;

    @Prop({
        type:         
        [{ 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
        }]
    })
    users: User[]

    @Prop({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Domain',
    })
    domain: Domain;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Site',
        }]
    })
    sites: Site[];

    @Prop({
        default: Date.now
    })
    created_at: Date;
}
export const PortfolioSchema = SchemaFactory.createForClass(Portfolio);
