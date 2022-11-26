import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { SearchResponseUserDto } from 'src/modules/user/dto/user.dto';
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
  @Query(() => [SearchResponseUserDto], { name: 'searchUser' })
  async searchUser(
    @Args('query') query: string,
    @CurrentUser() user: JWTPayload,
  ) {
    return this.userService.searchUser(query, user);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ResponseUserDetailDto, { name: 'getUserById' })
  async getUser(@Args('id') id: string) {
    return this.userService.getUserById(id);
  }

  @Mutation(() => StatusResponseDto, { name: 'createUser' })
  async createNewUser(@Args('inputCreate') inputCreate: InputCreateUserDto) {
    return this.userService.create(inputCreate);
    // console.log(user);
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
}
