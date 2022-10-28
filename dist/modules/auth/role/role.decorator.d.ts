import { Role } from 'src/constants/role';
export declare const ROLES_KEY = "role";
export declare const Roles: (...roles: Role[]) => import("@nestjs/common").CustomDecorator<string>;
