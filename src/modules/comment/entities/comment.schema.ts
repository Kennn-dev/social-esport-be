import { Post } from '@modules/posts/entities/post.schema';
import { User } from '@modules/user/models/users.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { TTimestamp } from 'src/types/common';
import { TYPE_POST } from './../../../constants/post';

export type CommentDocument = Comment & Document & TTimestamp;
@Schema({ timestamps: true })
export class Comment {
  _id: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  userId: string;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: Post.name })
  postId: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: TYPE_POST.FEED })
  type: TYPE_POST;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
