import { UserService } from './users.service';
import { User } from './models/users.schema';
import { InputCreateUserDto, ResponseUserDetailDto } from './dto/user.dto';
import { HttpStatus } from '@nestjs/common';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { UpdateUserInputDto } from './dto/update-user.dto';
import { JWTPayload } from '../auth/jwt.strategy';
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
}
