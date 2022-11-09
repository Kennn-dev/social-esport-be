import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ChangePasswordInputDto {
  @Field({ nullable: false })
  oldPassword: string;

  @Field({ nullable: false })
  newPassword: string;

  @Field({ nullable: false })
  confirmPassword: string;
}
