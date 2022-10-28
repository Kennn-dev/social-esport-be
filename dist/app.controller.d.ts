/// <reference types="multer" />
import { HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './modules/auth/auth.service';
import { UploadResponse } from './types/cloudinary';
export declare class AppController {
    private readonly authService;
    private readonly appService;
    constructor(authService: AuthService, appService: AppService);
    upload(file: Express.Multer.File): Promise<UploadResponse>;
    destroyImage(publicId: any): Promise<UploadResponse>;
    facebookLogin(): Promise<any>;
    facebookLoginRedirect(req: any): Promise<any>;
    googleAuth(): Promise<HttpStatus>;
    googleAuthRedirect(req: any): Promise<import("./modules/user/dto/user.dto").ResponseLoginDto>;
}
