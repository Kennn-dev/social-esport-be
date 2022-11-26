import { Model } from 'mongoose';
import { UserService } from '../user/users.service';
import { ResponseDto } from './../user/dto/user.dto';
import { FollowDataDto } from './dto/follow.dto';
import { FollowerDto } from './dto/get-follower.dto';
import { FollowDocument } from './entities/follow.schema';
export declare class FollowService {
    private userService;
    private followModel;
    constructor(userService: UserService, followModel: Model<FollowDocument>);
    sendRequest(senderId: string, followerId: string): Promise<ResponseDto>;
    unfollow(senderId: string, followerId: string): Promise<ResponseDto>;
    getUserFollowData(userId: string): Promise<FollowDataDto>;
    getUserFollower(userId: string): Promise<FollowerDto[]>;
    getUserFollowing(userId: string): Promise<FollowerDto[]>;
}
