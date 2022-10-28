import { AuthService } from './auth.service';
import { InputLoginDto, ResponseLoginDto } from '../user/dto/user.dto';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(input: InputLoginDto, context: any): Promise<ResponseLoginDto>;
}
