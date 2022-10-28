import { UserService } from 'src/modules/user/users.service';
import { TypeLogin } from 'src/constants/user';
export declare type JWTPayload = {
    userId: string;
    email: string;
    role: TypeLogin;
};
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userSerivce;
    constructor(userSerivce: UserService);
    validate(payload: any): Promise<JWTPayload>;
}
export {};
