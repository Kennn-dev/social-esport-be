import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ResponseUserDto } from 'src/modules/user/dto/user.dto';
@ObjectType()
export class FollowerDto {
  @Field()
  _id: string;

  @Field()
  userId: string;

  @Field()
  followerId: string;

  @Field(() => ResponseUserDto, { nullable: true })
  user: ResponseUserDto;
}

@ObjectType()
export class FollowerResponseDto {
  @Field(() => [FollowerDto])
  data: FollowerDto[];

  @Field(() => Int, { defaultValue: 0 })
  total: number;
}
