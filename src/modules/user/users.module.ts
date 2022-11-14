import { FollowModule } from './../follow/follow.module';
import { Friend, FriendSchema } from './models/friends.schema';
import { User, UserSchema } from './models/users.schema';
import { UserResolver } from './users.resolver';
import { UserService } from './users.service';

import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from '../category/category.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      {
        name: Friend.name,
        schema: FriendSchema,
      },
    ]),
    forwardRef(() => FollowModule),
    CategoryModule,
  ],
  controllers: [],
  providers: [UserResolver, UserService],
  exports: [UserModule, UserService, MongooseModule],
})
export class UserModule {}
