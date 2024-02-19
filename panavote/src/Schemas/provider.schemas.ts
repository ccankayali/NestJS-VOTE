// schemas/provider.schema.ts
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

  // Add other properties as needed
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
