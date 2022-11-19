import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { TCurrentUser } from 'src/types/user';
import { JwtAuthGuard } from './../../guards/jwt-auth.guard';
import { ResponseDto } from './../user/dto/user.dto';
import {} from './dto/follow.dto';
import { FollowerDto } from './dto/get-follower.dto';
import { Follow } from './entities/follow.entity';
import { FollowService } from './follow.service';

@Resolver(() => Follow)
export class FollowResolver {
  constructor(private readonly followService: FollowService) {}

  @Mutation(() => ResponseDto, { name: 'follow' })
  @UseGuards(JwtAuthGuard)
  create(
    @Args('followerId') followerId: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.followService.sendRequest(user.userId, followerId);
  }

  @Mutation(() => ResponseDto, { name: 'unfollow' })
  @UseGuards(JwtAuthGuard)
  unfollow(
    @Args('followerId') followerId: string,
    @CurrentUser() user: TCurrentUser,
  ) {
    return this.followService.unfollow(user.userId, followerId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [FollowerDto], { name: 'getFollowers' })
  getFollowers(@CurrentUser() user: TCurrentUser) {
    return this.followService.getUserFollower(user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [FollowerDto], { name: 'getFollowing' })
  getFollowing(@CurrentUser() user: TCurrentUser) {
    return this.followService.getUserFollowing(user.userId);
  }
}
