"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const users_module_1 = require("../user/users.module");
const auth_controller_1 = require("./auth.controller");
const auth_resolver_1 = require("./auth.resolver");
const auth_service_1 = require("./auth.service");
const facebook_strategy_1 = require("./facebook.strategy");
const google_strategy_1 = require("./google.strategy");
const jwt_strategy_1 = require("./jwt.strategy");
const local_strategy_1 = require("./local.strategy");
let AuthModule = AuthModule_1 = class AuthModule {
};
AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '2 days' },
            }),
            users_module_1.UserModule,
        ],
        providers: [
            facebook_strategy_1.FacebookStrategy,
            google_strategy_1.GoogleStrategy,
            jwt_strategy_1.JwtStrategy,
            auth_resolver_1.AuthResolver,
            auth_service_1.AuthService,
            local_strategy_1.LocalStrategy,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [AuthModule_1],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map