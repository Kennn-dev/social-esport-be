import {
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from 'src/types/user';
import { CreatePostInputDto } from './dto/create-post.input';
import { UpdatePostInputDto } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.schema';
@Injectable()
export class PostService {
  constructor(
    // private userService: UserService,
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}
  async create(
    createPostDto: CreatePostInputDto,
    author: TCurrentUser,
  ): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = new this.postModel(createPostDto);
    post.author = new mongoose.Types.ObjectId(author.userId);
    await post.save();
    return {
      message: 'Create post successful !',
      status: HttpStatus.OK,
    };
  }
  async update(
    id: string,
    updatePostDto: UpdatePostInputDto,
    author: TCurrentUser,
  ): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = await this.postModel.findById(id);
    if (author.userId !== post.author.toString())
      throw new ForbiddenException("You don't have permission to edit");
    await post.update(updatePostDto);
    await post.save();
    return {
      message: 'Update post successful !',
      status: HttpStatus.OK,
    };
  }
  findAll() {
    return `This action returns all post`;
  }

  async findOne(query: any): Promise<Post> {
    const post = await this.postModel.findOne(query);
    return post;
  }

  async remove(id: string, author: TCurrentUser): Promise<StatusResponseDto> {
    if (!author) throw new HttpException('Cannot find author', 400);
    const post = await this.postModel.findById(id);
    if (author.userId !== post.author.toString())
      throw new ForbiddenException("You don't have permission to delete");
    await post.deleteOne({
      _id: post._id,
    });
    return {
      message: 'Delete post successful !',
      status: HttpStatus.OK,
    };
  }
}
