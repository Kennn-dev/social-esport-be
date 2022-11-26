import { User } from '@modules/user/models/users.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema, Types } from 'mongoose';
import { NOTIFICATION_TYPE } from 'src/constants/follow';
import { TTimestamp } from 'src/types/common';

export type NotificationDocument = Notification & Document & TTimestamp;
@Schema({ timestamps: true })
export class Notification {
  _id: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name, required: true })
  receiver: Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name, required: true })
  sender: Types.ObjectId;

  @Prop({ default: NOTIFICATION_TYPE.NONE, enum: NOTIFICATION_TYPE })
  type: number;

  //   Ex  : post Id got notify, comment id, ...
  @Prop({ required: false })
  typeId: String;

  @Prop({ default: null })
  message: String;
  @Prop({ default: false })
  isRead: Boolean;
}

export const NotificationSchema = SchemaFactory.createForClass(Notification);
