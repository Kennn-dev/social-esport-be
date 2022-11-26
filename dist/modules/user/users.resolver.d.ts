import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { SearchResponseUserDto } from 'src/modules/user/dto/user.dto';
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
    searchUser(query: string, user: JWTPayload): Promise<SearchResponseUserDto[]>;
    getUser(id: string): Promise<ResponseUserDetailDto>;
    createNewUser(inputCreate: InputCreateUserDto): Promise<StatusResponseDto>;
    updateUser(id: string, inputUpdate: UpdateUserInputDto, user: JWTPayload): Promise<StatusResponseDto>;
    changePassword(input: ChangePasswordInputDto, user: JWTPayload): Promise<StatusResponseDto>;
}
