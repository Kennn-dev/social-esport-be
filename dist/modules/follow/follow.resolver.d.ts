import { ResponseDto } from './../user/dto/user.dto';
import { FollowService } from './follow.service';
import { TCurrentUser } from 'src/types/user';
export declare class FollowResolver {
    private readonly followService;
    constructor(followService: FollowService);
    create(followerId: string, user: TCurrentUser): Promise<ResponseDto>;
    unfollow(id: string): Promise<ResponseDto>;
    findAll(): Promise<import("./entities/follow.schema").Follow[]>;
    removeFollow(id: number): string;
}
