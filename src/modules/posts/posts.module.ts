import { UserModule } from '@modules/user/users.module';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './entities/post.schema';
import { PostResolver } from './posts.resolver';
import { PostService } from './posts.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
    // forwardRef(() => FollowModule),
    UserModule,
  ],
  providers: [PostResolver, PostService],
  exports: [PostService, MongooseModule],
})
export class PostsModule {}
