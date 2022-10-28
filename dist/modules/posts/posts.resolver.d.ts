import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from 'src/types/user';
import { CreatePostInputDto } from './dto/create-post.input';
import { UpdatePostInputDto } from './dto/update-post.input';
import { PostService } from './posts.service';
export declare class PostResolver {
    private readonly postService;
    constructor(postService: PostService);
    createPost(inputCreate: CreatePostInputDto, user: TCurrentUser): Promise<StatusResponseDto>;
    updatePost(inputUpdate: UpdatePostInputDto, id: string, user: TCurrentUser): Promise<StatusResponseDto>;
    deletePost(id: string, user: TCurrentUser): Promise<StatusResponseDto>;
}
