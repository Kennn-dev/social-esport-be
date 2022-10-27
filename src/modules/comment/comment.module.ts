import { PostsModule } from '@modules/posts/posts.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentResolver } from './comment.resolver';
import { CommentService } from './comment.service';
import { Comment, CommentSchema } from './entities/comment.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
    // forwardRef(() => FollowModule),
    PostsModule,
  ],
  providers: [CommentResolver, CommentService],
  exports: [MongooseModule, CommentService],
})
export class CommentModule {}
