/// <reference types="multer" />
import { UploadApiErrorResponse, UploadApiResponse } from 'cloudinary';
export declare class CloudinaryService {
    upload(file: Express.Multer.File): Promise<UploadApiResponse | UploadApiErrorResponse>;
    getImageUrl(source: string): Promise<string>;
    destroy(publicId: string): Promise<any>;
}
