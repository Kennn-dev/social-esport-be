import { HttpStatus } from '@nestjs/common';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { JWTPayload } from '../auth/jwt.strategy';
import { ChangePasswordInputDto } from './dto/change-password-input.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { InputCreateUserDto, ResponseUserDetailDto } from './dto/user.dto';
import { User } from './models/users.schema';
import { UserService } from './users.service';
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    hello(): Promise<string>;
    getAllUser(): Promise<User[]>;
    getUser(id: string): Promise<ResponseUserDetailDto>;
    createNewUser(inputCreate: InputCreateUserDto): Promise<{
        status: HttpStatus;
        message: string;
    }>;
    updateUser(id: string, inputUpdate: UpdateUserInputDto, user: JWTPayload): Promise<StatusResponseDto>;
    changePassword(input: ChangePasswordInputDto, user: JWTPayload): Promise<StatusResponseDto>;
    getFriendsList(): Promise<User[]>;
    sendFriendRequest(friendId: string, user: JWTPayload): Promise<StatusResponseDto>;
    replyFriendRequest(requesterId: string, isAccept: boolean, user: JWTPayload): Promise<StatusResponseDto>;
}
