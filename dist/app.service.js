"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const cloudinary_service_1 = require("./modules/cloudinary/cloudinary.service");
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    constructor(cloudinaryService) {
        this.cloudinaryService = cloudinaryService;
    }
    getHello() {
        return 'Hello World!';
    }
    async upload(file) {
        const { url, resource_type, public_id } = await this.cloudinaryService.upload(file);
        return {
            status: common_1.HttpStatus.OK,
            message: 'Upload success',
            url,
            type: resource_type,
            public_id,
        };
    }
    async destroy(publicId) {
        const realPublicId = `social-esport/${publicId}`;
        const { result } = await this.cloudinaryService.destroy(realPublicId);
        return {
            status: common_1.HttpStatus.OK,
            result,
        };
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cloudinary_service_1.CloudinaryService])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map