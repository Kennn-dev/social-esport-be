import { Model } from 'mongoose';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from 'src/types/user';
import { CreatePostInputDto } from './dto/create-post.input';
import { UpdatePostInputDto } from './dto/update-post.input';
import { Post, PostDocument } from './entities/post.schema';
export declare class PostService {
    private readonly postModel;
    constructor(postModel: Model<PostDocument>);
    create(createPostDto: CreatePostInputDto, author: TCurrentUser): Promise<StatusResponseDto>;
    update(id: string, updatePostDto: UpdatePostInputDto, author: TCurrentUser): Promise<StatusResponseDto>;
    findAll(): string;
    findOne(query: any): Promise<Post>;
    remove(id: string, author: TCurrentUser): Promise<StatusResponseDto>;
}
