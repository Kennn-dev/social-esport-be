import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCommentInput {
  @Field({ nullable: false })
  postId: string;

  @Field({ nullable: false })
  content: string;

  @Field({ nullable: true })
  type: string;
}
