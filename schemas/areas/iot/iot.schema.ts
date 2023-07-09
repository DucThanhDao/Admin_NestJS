import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type IotDocument = HydratedDocument<Iot>;
@Schema()
export class Iot {

    @Prop({
        required: true,
        unique: true,
    })
    name: string;

    @Prop({
        required: true,
        unique: true,
    })
    code: string;

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const IotSchema = SchemaFactory.createForClass(Iot);
