import { TCurrentUser } from 'src/types/user';
import { ResponseDto } from './../user/dto/user.dto';
import { FollowerDto } from './dto/get-follower.dto';
import { FollowService } from './follow.service';
export declare class FollowResolver {
    private readonly followService;
    constructor(followService: FollowService);
    create(followerId: string, user: TCurrentUser): Promise<ResponseDto>;
    unfollow(followerId: string, user: TCurrentUser): Promise<ResponseDto>;
    getFollowers(user: TCurrentUser): Promise<FollowerDto[]>;
    getFollowing(user: TCurrentUser): Promise<FollowerDto[]>;
}
