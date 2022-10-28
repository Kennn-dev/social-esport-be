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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const common_2 = require("@nestjs/common");
const auth_1 = require("../utils/auth");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(options) {
        super(options);
        this.options = options;
    }
    async canActivate(context) {
        const canActivate = super.canActivate(context);
        const success = await canActivate;
        if (!success) {
            return true;
        }
        const req = this.getRequest(context);
        req.jwt = req.user;
        return true;
    }
    getRequest(context) {
        return (0, auth_1.getRequestUtils)(context);
    }
};
JwtAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_2.Optional)()),
    __metadata("design:paramtypes", [passport_1.AuthModuleOptions])
], JwtAuthGuard);
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=jwt-auth.guard.js.map