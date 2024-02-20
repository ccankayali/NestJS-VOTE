/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Provider extends Document {
  @Prop({ required: true })
  companyName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

}

export const ProviderSchema = SchemaFactory.createForClass(Provider);