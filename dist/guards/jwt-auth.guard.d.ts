import { ExecutionContext } from '@nestjs/common';
import { AuthModuleOptions } from '@nestjs/passport';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    protected readonly options?: AuthModuleOptions;
    constructor(options?: AuthModuleOptions);
    canActivate(context: any): Promise<boolean>;
    getRequest(context: ExecutionContext): any;
}
export {};
