import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { TCurrentUser } from './../../types/user';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';

@Resolver('comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => StatusResponseDto, { name: 'createComment' })
  async createComment(
    @Args('createCommentInput') createCommentInput: CreateCommentInput,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.commentService.create(user.userId, createCommentInput);
  }

  // @Query(() => [Comment], { name: 'comment' })
  // findAll() {
  //   return this.commentService.findAll();
  // }

  // @Query(() => Comment, { name: 'comment' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.findOne(id);
  // }

  @Mutation(() => StatusResponseDto, { name: 'updateComment' })
  updateComment(
    @CurrentUser() user: TCurrentUser,
    @Args('idComment') idComment: string,
    @Args('updateCommentInput') updateCommentInput: UpdateCommentInput,
  ) {
    return;
  }

  // @Mutation(() => Comment)
  // removeComment(@Args('id', { type: () => Int }) id: number) {
  //   return this.commentService.remove(id);
  // }
}
