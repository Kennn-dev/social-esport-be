import { HttpStatus, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JWTPayload } from '../auth/jwt.strategy';
import { ChangePasswordInputDto } from './dto/change-password-input.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
import {
  InputCreateUserDto,
  ResponseUserDetailDto,
  UserDto,
} from './dto/user.dto';
import { User } from './models/users.schema';
import { UserService } from './users.service';
@Resolver(User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => String)
  async hello() {
    return 'Hello from user';
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => [UserDto])
  async getAllUser() {
    return this.userService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ResponseUserDetailDto, { name: 'getUserById' })
  async getUser(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => StatusResponseDto, { name: 'createUser' })
  async createNewUser(@Args('inputCreate') inputCreate: InputCreateUserDto) {
    const user = await this.userService.create(inputCreate);
    console.log(user);

    if (user) {
      return {
        status: HttpStatus.OK,
        message: 'Created succesfully !',
      };
    }
  }

  // update
  @Mutation(() => StatusResponseDto)
  @UseGuards(JwtAuthGuard)
  async updateUser(
    @Args('id') id: string,
    @Args('inputUpdate') inputUpdate: UpdateUserInputDto,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.update(id, inputUpdate, user);
  }

  // update password
  @Mutation(() => StatusResponseDto)
  @UseGuards(JwtAuthGuard)
  async changePassword(
    @Args('input') input: ChangePasswordInputDto,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.changePassword(input, user);
  }

  // Get Friends request
  @UseGuards(JwtAuthGuard)
  @Query(() => [UserDto])
  async getFriendsList() {
    return this.userService.findAll();
  }

  // Send Friend Request
  @Mutation(() => StatusResponseDto, { name: 'sendFriendRequest' })
  @UseGuards(JwtAuthGuard)
  async sendFriendRequest(
    @Args('friendId') friendId: string,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.sendFriendRequest(friendId, user);
  }

  // Receive Friend Request
  @Mutation(() => StatusResponseDto, { name: 'replyFriendRequest' })
  @UseGuards(JwtAuthGuard)
  async replyFriendRequest(
    @Args('requesterId') requesterId: string,
    @Args('isAccept') isAccept: boolean,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.replyFriendRequest(requesterId, user, isAccept);
  }
}
