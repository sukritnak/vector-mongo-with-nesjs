import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { InformationEntity } from '../information.entity';

export const InformationIndex = 'information_index';
export const InformationCollectionName = 'information';

@Schema({
    collection: InformationCollectionName,
    timestamps: true,
})
export class InformationSchemaMongo extends Document implements InformationEntity {
    @Prop({ required: true })
    content: string;

    @Prop({ required: false })
    metadata?: Record<string, string>;

    @Prop({ required: true })
    contentEmbedding: number[];

    @Prop({ type: Date, default: Date.now })
    createdAt: Date;

    @Prop({ type: Date })
    updatedAt: Date;
}

export const InformationSchema = SchemaFactory.createForClass(InformationSchemaMongo);
