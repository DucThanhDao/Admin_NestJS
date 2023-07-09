import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Portfolio } from '../areas/portfolio/portfolio.schema';
import { Site } from 'schemas/areas/site/site.schema';

export type UserDocument = mongoose.HydratedDocument<User>;
@Schema()
export class User {
    @Prop({
        require: true,
        trim: true
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
        lowercase: true,
    })
    email: string;

    @Prop({
        trim: true,
    })
    phone: string;

    @Prop({
        required: true,
    })
    role: string;

    @Prop({
        required: true,
        minlength: 3,
    })
    password: string;

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Portfolio',
        }]
    })
    portfolios: Portfolio[];

    @Prop({
        type: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Site',
        }]
    })
    sites: Site[];
    
    @Prop({
        required: true,
    })
    token: string;

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop({
        default: 0,
    })
    is_active: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
