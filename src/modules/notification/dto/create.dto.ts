import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateNotificationInput {
  @Field({ nullable: false })
  receiver: String;

  // @Field({ nullable: false })
  // sender: String;

  @Field({ nullable: true })
  type: number;

  //   Ex  : post Id got notify, comment id, ...
  @Field({ nullable: true })
  typeId: String;

  @Field({ nullable: true })
  message: String;
}
// @ObjectType()
// export class FollowDto {
//   @Field(() => Int)
//   total: number;

//   @Field(() => [ResponseUserDto])
//   listUsers: ResponseUserDto[];
// }
