import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type PermissionDocument = mongoose.HydratedDocument<Permission>;
@Schema()
export class Permission {
    @Prop({
        required: true,
        unique: true,
    })
    name: string;

    @Prop()
    description: string;


    @Prop({
        required: true,
    })
    route: string;

    @Prop({
        default: Date.now,
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
