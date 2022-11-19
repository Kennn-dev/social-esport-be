import { Model } from 'mongoose';
import { UserService } from '../user/users.service';
import { ResponseDto } from './../user/dto/user.dto';
import { FollowDataDto } from './dto/follow.dto';
import { FollowerDto } from './dto/get-follower.dto';
import { Follow, FollowDocument } from './entities/follow.schema';
export declare class FollowService {
    private userService;
    private followModel;
    constructor(userService: UserService, followModel: Model<FollowDocument>);
    sendRequest(senderId: string, followerId: string): Promise<ResponseDto>;
    unfollow(senderId: string, followerId: string): Promise<ResponseDto>;
    findOne(params: any): Promise<Follow>;
    findAll(): Promise<Follow[]>;
    getUserFollowData(userId: string): Promise<FollowDataDto>;
    getUserFollower(userId: string): Promise<FollowerDto[]>;
    getUserFollowing(userId: string): Promise<FollowerDto[]>;
    update(id: number): string;
    remove(id: number): string;
}
