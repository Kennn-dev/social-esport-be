import { Field, ObjectType } from '@nestjs/graphql';
@ObjectType()
export class NotificationDto {
  @Field()
  _id: String;

  @Field()
  receiver: String;

  @Field()
  sender: String;

  @Field()
  type: number | null;

  //   Ex  : post Id got notify, comment id, ...
  @Field({ nullable: true })
  typeId: String;

  @Field()
  message: String;
  @Field()
  isRead: Boolean;
}
