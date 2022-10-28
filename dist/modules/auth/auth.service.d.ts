import { JwtService } from '@nestjs/jwt';
import { ResponseLoginDto } from '../user/dto/user.dto';
import { User } from '../user/models/users.schema';
import { UserService } from '../user/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UserService, jwtService: JwtService);
    validateUser(email: string, pass: string): Promise<any>;
    login(user: User): Promise<ResponseLoginDto | null>;
    loginWithGoogle(payload: any): Promise<ResponseLoginDto | null>;
    loginWithFacebook(payload: any): Promise<ResponseLoginDto | null>;
}
