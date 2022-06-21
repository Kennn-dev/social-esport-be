import { InputType } from '@nestjs/graphql';
import { CreatePostInputDto } from './create-post.input';

@InputType()
export class UpdatePostInputDto extends CreatePostInputDto {}
