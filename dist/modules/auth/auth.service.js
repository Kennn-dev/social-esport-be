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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const socialLogin_1 = require("../../common/socialLogin");
const user_1 = require("../../constants/user");
const users_service_1 = require("../user/users.service");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, pass) {
        const user = await this.usersService.findOne({ email });
        if (!user)
            return null;
        const isMatch = await user.comparePassword(pass);
        const _a = user._doc, { password } = _a, rs = __rest(_a, ["password"]);
        if (isMatch) {
            return rs;
        }
        return null;
    }
    async login(user) {
        return {
            user,
            accessToken: this.jwtService.sign({ email: user.email, sub: user._id }),
            tokenType: 'Bearer',
        };
    }
    async loginWithGoogle(payload) {
        try {
            const user = await this.usersService.findOne({
                email: payload.user.email,
            });
            if (!user) {
                const newUser = await this.usersService.createUserWithSocialAccount({
                    email: payload.user.email,
                    firstName: payload.user.firstName,
                    lastName: payload.user.lastName,
                    googleId: payload.user.id,
                    avatar: payload.user.avatar,
                    password: null,
                });
                return (0, socialLogin_1.handleAfterLogin)(newUser, payload, user_1.TypeLogin.GOOGLE, () => {
                    return {
                        user: newUser,
                        accessToken: this.jwtService.sign({
                            email: newUser.email,
                            sub: newUser._id,
                        }),
                        tokenType: 'Bearer',
                    };
                });
            }
            return (0, socialLogin_1.handleAfterLogin)(user, payload, user_1.TypeLogin.GOOGLE, () => {
                return {
                    user,
                    accessToken: this.jwtService.sign({
                        email: user.email,
                        sub: user._id,
                    }),
                    tokenType: 'Bearer',
                };
            });
        }
        catch (error) {
            console.error(error);
            if (typeof error === 'string')
                throw new common_1.HttpException(error, 500);
            if (error instanceof Error)
                throw new common_1.HttpException(error.message, 500);
        }
    }
    async loginWithFacebook(payload) {
        try {
            const user = await this.usersService.findOne({
                email: payload.user.email,
            });
            if (!user) {
                const newUser = await this.usersService.createUserWithSocialAccount({
                    email: payload.user.email,
                    firstName: payload.user.firstName,
                    lastName: payload.user.lastName,
                    password: null,
                    facebookId: payload.user.id,
                });
                return (0, socialLogin_1.handleAfterLogin)(newUser, payload, user_1.TypeLogin.FACEBOOK, () => {
                    return {
                        user: newUser,
                        accessToken: this.jwtService.sign({
                            email: newUser.email,
                            sub: newUser._id,
                        }),
                        tokenType: 'Bearer',
                    };
                });
            }
            return (0, socialLogin_1.handleAfterLogin)(user, payload, user_1.TypeLogin.FACEBOOK, () => {
                return {
                    user,
                    accessToken: this.jwtService.sign({
                        email: user.email,
                        sub: user._id,
                    }),
                    tokenType: 'Bearer',
                };
            });
        }
        catch (e) {
            console.log(e);
            if (typeof e === 'string') {
                throw new common_1.HttpException(e, 500);
            }
            else if (e instanceof Error) {
                throw new common_1.HttpException(e.message, 500);
            }
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map