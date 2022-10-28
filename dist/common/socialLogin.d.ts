import { TypeLogin } from 'src/constants/user';
export declare type LoginPayload = {
    user: {
        id: string;
        email: string;
        firstName: string;
        lastName: string;
        avatar: string;
        googleAccessToken?: string;
        facebookAccessToken?: string;
    };
    accessToken: string;
};
export declare function handleAfterLogin(user: any, payload: LoginPayload, type: TypeLogin, cb: () => any): any;
