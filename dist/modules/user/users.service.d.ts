import { Model } from 'mongoose';
import { FollowService } from './../follow/follow.service';
import { InputCreateUserDto, ResponseUserDetailDto } from './dto/user.dto';
import { FriendDocument } from './models/friends.schema';
import { User, UserDocument } from './models/users.schema';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { JWTPayload } from '../auth/jwt.strategy';
import { ChangePasswordInputDto } from './dto/change-password-input.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
export declare class UserService {
    private readonly userModel;
    private readonly friendModel;
    private followService;
    constructor(userModel: Model<UserDocument>, friendModel: Model<FriendDocument>, followService: FollowService);
    findAll(): Promise<User[]>;
    createUserWithSocialAccount(data: any): Promise<User>;
    create(createUserDto: InputCreateUserDto): Promise<User>;
    getUserById(id: string): Promise<ResponseUserDetailDto>;
    findOne(params: any): Promise<User>;
    update(id: string, data: UpdateUserInputDto, userReq: JWTPayload): Promise<StatusResponseDto>;
    changePassword(input: ChangePasswordInputDto, userJwt: JWTPayload): Promise<StatusResponseDto>;
    sendFriendRequest(friendId: string, userJwt: JWTPayload): Promise<StatusResponseDto>;
    replyFriendRequest(requesterId: string, userJwt: JWTPayload, isAccept: boolean): Promise<StatusResponseDto>;
    getFriendList(userJwt: JWTPayload): Promise<void>;
}
