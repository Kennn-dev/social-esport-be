import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from './../../types/user';
import { CommentService } from './comment.service';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
export declare class CommentResolver {
    private readonly commentService;
    constructor(commentService: CommentService);
    createComment(createCommentInput: CreateCommentInput, user: TCurrentUser): Promise<StatusResponseDto>;
    updateComment(user: TCurrentUser, idComment: string, updateCommentInput: UpdateCommentInput): void;
}
