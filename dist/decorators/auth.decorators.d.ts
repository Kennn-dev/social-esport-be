import { Role } from 'src/constants/role';
export declare function Auth(...roles: Role[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const CurrentUser: (...dataOrPipes: any[]) => ParameterDecorator;
