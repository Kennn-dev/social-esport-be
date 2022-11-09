import { FollowService } from './../follow/follow.service';
import { InputCreateUserDto, ResponseUserDetailDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { User, UserDocument } from './models/users.schema';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { JWTPayload } from '../auth/jwt.strategy';
import { ChangePasswordInputDto } from './dto/change-password-input.dto';
export declare class UserService {
    private readonly userModel;
    private followService;
    constructor(userModel: Model<UserDocument>, followService: FollowService);
    findAll(): Promise<User[]>;
    createUserWithSocialAccount(data: any): Promise<User>;
    create(createUserDto: InputCreateUserDto): Promise<User>;
    getUserById(id: string): Promise<ResponseUserDetailDto>;
    findOne(params: any): Promise<User>;
    update(id: string, data: UpdateUserInputDto, userReq: JWTPayload): Promise<StatusResponseDto>;
    changePassword(input: ChangePasswordInputDto, userJwt: JWTPayload): Promise<StatusResponseDto>;
}
