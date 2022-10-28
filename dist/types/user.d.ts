import { Role } from 'src/constants/role';
export interface LoginPayload {
    email: string;
    password?: string;
}
export declare type TCurrentUser = {
    userId: string;
    email: string;
    role: Role;
};
