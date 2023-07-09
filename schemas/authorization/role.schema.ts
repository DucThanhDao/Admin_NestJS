import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Permission } from './permission.schema';

export type RoleDocument = mongoose.HydratedDocument<Role>;
@Schema()
export class Role {
    @Prop({
        required: true,
        unique: true,
    })
    name: string;

    @Prop()
    description: string;

    @Prop({
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }],
    })
    permissions: Permission[];

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const RoleSchema = SchemaFactory.createForClass(Role);
