"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudinaryService = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_1 = require("cloudinary");
const toStream = require("buffer-to-stream");
let CloudinaryService = class CloudinaryService {
    async upload(file) {
        return new Promise((resolve, reject) => {
            const upload = cloudinary_1.v2.uploader.upload_stream({
                folder: 'social-esport',
            }, (error, result) => {
                if (error)
                    return reject(error);
                resolve(result);
            });
            toStream(file.buffer).pipe(upload);
        });
    }
    async getImageUrl(source) {
        const url = cloudinary_1.v2.image(source, {
            quality: 'auto',
            crop: 'scale',
        });
        return url;
    }
    async destroy(publicId) {
        console.log(publicId);
        return new Promise((resolve, reject) => {
            cloudinary_1.v2.uploader.destroy(publicId, {}, (err, result) => {
                if (err)
                    return reject(err);
                resolve(result);
            });
        });
    }
};
CloudinaryService = __decorate([
    (0, common_1.Injectable)()
], CloudinaryService);
exports.CloudinaryService = CloudinaryService;
//# sourceMappingURL=cloudinary.service.js.map