import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { FOLLOW_STATUS } from 'src/constants/follow';
import { User } from 'src/modules/user/models/users.schema';
import { TTimestamp } from 'src/types/common';

export type FollowDocument = Follow & Document & TTimestamp;
@Schema({ timestamps: true })
export class Follow {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  followerId: Types.ObjectId;

  @Prop({ default: FOLLOW_STATUS.INIT })
  status: number;
}

export const FollowSchema = SchemaFactory.createForClass(Follow);
