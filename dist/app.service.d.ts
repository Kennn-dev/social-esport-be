/// <reference types="multer" />
import { CloudinaryService } from './modules/cloudinary/cloudinary.service';
import { UploadResponse } from './types/cloudinary';
export declare class AppService {
    private cloudinaryService;
    constructor(cloudinaryService: CloudinaryService);
    getHello(): string;
    upload(file: Express.Multer.File): Promise<UploadResponse>;
    destroy(publicId: string): Promise<any>;
}
