import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  name?: string;

  @Prop({ required: true, default: ['user'] })
  roles: string[];

  @Prop({ default: false })
  isProvider: boolean;

  @Prop([{ type: Types.ObjectId, ref: 'Service' }])
  servicesProvided: Types.ObjectId[];

  @Prop([
    {
      reviewer: { type: Types.ObjectId, ref: 'User' },
      rating: Number,
      comment: String,
      createdAt: { type: Date, default: Date.now },
    },
  ])
  reviews: {
    reviewer: Types.ObjectId;
    rating: number;
    comment?: string;
    createdAt: Date;
  }[];
}

export const UserSchema = SchemaFactory.createForClass(User);
