import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TCurrentUser } from 'src/types/user';
import { CurrentUser } from '../user/decorator';
import { CreatePostInputDto } from './dto/create-post.input';
import { UpdatePostInputDto } from './dto/update-post.input';
import { PostService } from './posts.service';

@Resolver('post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => StatusResponseDto, { name: 'createPost' })
  async createPost(
    @Args('inputCreate') inputCreate: CreatePostInputDto,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.postService.create(inputCreate, user);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => StatusResponseDto, { name: 'updatePost' })
  async updatePost(
    @Args('inputUpdate') inputUpdate: UpdatePostInputDto,
    @Args('id') id: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.postService.update(id, inputUpdate, user);
  }
  @UseGuards(JwtAuthGuard)
  @Mutation(() => StatusResponseDto, { name: 'deletePost' })
  async deletePost(@Args('id') id: string, @CurrentUser() user: TCurrentUser) {
    return this.postService.remove(id, user);
  }
}
