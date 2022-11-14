import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

// https://stackoverflow.com/questions/2910134/friendship-database-schema
export type FriendDocument = Friend & Document;
@Schema({ timestamps: true })
export class Friend {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  friendId: string;
}

export const FriendSchema = SchemaFactory.createForClass(Friend);
