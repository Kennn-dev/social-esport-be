import { PostService } from '@modules/posts/posts.service';
import { Model } from 'mongoose';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentDocument } from './entities/comment.schema';
export declare class CommentService {
    private postService;
    private readonly commentModel;
    constructor(postService: PostService, commentModel: Model<CommentDocument>);
    create(idUser: string, createCommentInput: CreateCommentInput): Promise<StatusResponseDto>;
    findAll(): string;
    findOne(id: number): string;
    update(idUser: string, idComment: string, createCommentInput: UpdateCommentInput): Promise<StatusResponseDto>;
    remove(id: number): string;
}
