import { Model } from 'mongoose';
import { FOLLOW_STATUS } from 'src/constants/follow';
import { UserService } from '../user/users.service';
import { ResponseDto } from './../user/dto/user.dto';
import { FollowDataDto } from './dto/follow.dto';
import { Follow, FollowDocument } from './entities/follow.schema';
export declare class FollowService {
    private userService;
    private followModel;
    constructor(userService: UserService, followModel: Model<FollowDocument>);
    sendRequest(senderId: string, followerId: string): Promise<ResponseDto>;
    unfollow(followId: string): Promise<ResponseDto>;
    replyRequest(senderId: string, status: FOLLOW_STATUS): Promise<ResponseDto>;
    findOne(params: any): Promise<Follow>;
    findAll(): Promise<Follow[]>;
    getUserFollowData(userId: string): Promise<FollowDataDto>;
    update(id: number): string;
    remove(id: number): string;
}
