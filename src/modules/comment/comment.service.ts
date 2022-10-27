import { PostService } from '@modules/posts/posts.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { Comment, CommentDocument } from './entities/comment.schema';

@Injectable()
export class CommentService {
  constructor(
    // private userService: UserService,
    private postService: PostService,
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}
  async create(
    idUser: string,
    createCommentInput: CreateCommentInput,
  ): Promise<StatusResponseDto> {
    if (!idUser) throw new HttpException('User Id invalid', 400);
    if (!idUser) throw new HttpException('Cannot find user', 400);
    const post = this.postService.findOne({ id: createCommentInput.postId });
    if (!post) throw new HttpException('Invalid Post', 400);

    const comment = new this.commentModel(createCommentInput);
    await comment.save();
    return {
      message: 'Action Success ',
      status: HttpStatus.OK,
    };
  }

  findAll() {
    return `This action returns all comment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  async update(
    idUser: string,
    idComment: string,
    createCommentInput: UpdateCommentInput,
  ): Promise<StatusResponseDto> {
    if (!idUser) throw new HttpException('User Id invalid', 400);
    if (!idUser) throw new HttpException('Cannot find user', 400);
    const post = this.postService.findOne({ id: createCommentInput.postId });
    if (!post) throw new HttpException('Invalid Post', 400);

    const comment = await this.commentModel.findById(idComment);
    await comment.save();
    return {
      message: 'Action Success ',
      status: HttpStatus.OK,
    };
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
