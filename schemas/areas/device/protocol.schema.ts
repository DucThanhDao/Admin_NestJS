import {Schema, Prop, SchemaFactory} from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';

export type ProtocolDocument = HydratedDocument<Protocol>;

@Schema()
export class Protocol {
    @Prop({
        required: true,
        unique: true,
    })
    name: string;

    @Prop({
        required: true,
    })
    paras_infor: string[];

    @Prop({
        required: true,
    })
    paras_config: string[];

    @Prop({
        required: true,
    })
    paras_tag: string[];

    @Prop()
    __v: string;

    @Prop()
    data_type: string[];

    @Prop({
        default: Date.now
    })
    created_at: Date;

    @Prop()
    updated_at: Date;
}

export const ProtocolSchema = SchemaFactory.createForClass(Protocol);
