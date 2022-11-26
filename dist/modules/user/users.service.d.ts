import { Model } from 'mongoose';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { SearchResponseUserDto } from 'src/modules/user/dto/user.dto';
import { JWTPayload } from '../auth/jwt.strategy';
import { FollowService } from './../follow/follow.service';
import { ChangePasswordInputDto } from './dto/change-password-input.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { InputCreateUserDto, ResponseUserDetailDto } from './dto/user.dto';
import { User, UserDocument } from './models/users.schema';
export declare class UserService {
    private readonly userModel;
    private followService;
    constructor(userModel: Model<UserDocument>, followService: FollowService);
    findAll(): Promise<User[]>;
    searchUser(searchStr: string, user: JWTPayload): Promise<SearchResponseUserDto[]>;
    createUserWithSocialAccount(data: any): Promise<User>;
    create(createUserDto: InputCreateUserDto): Promise<StatusResponseDto>;
    getUserById(id: string): Promise<ResponseUserDetailDto>;
    findOne(params: any): Promise<User>;
    update(id: string, data: UpdateUserInputDto, userReq: JWTPayload): Promise<StatusResponseDto>;
    changePassword(input: ChangePasswordInputDto, userJwt: JWTPayload): Promise<StatusResponseDto>;
}
