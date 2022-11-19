"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var UserModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const follow_module_1 = require("./../follow/follow.module");
const users_schema_1 = require("./models/users.schema");
const users_resolver_1 = require("./users.resolver");
const users_service_1 = require("./users.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const category_module_1 = require("../category/category.module");
let UserModule = UserModule_1 = class UserModule {
};
UserModule = UserModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: users_schema_1.User.name, schema: users_schema_1.UserSchema }]),
            (0, common_1.forwardRef)(() => follow_module_1.FollowModule),
            category_module_1.CategoryModule,
        ],
        controllers: [],
        providers: [users_resolver_1.UserResolver, users_service_1.UserService],
        exports: [UserModule_1, users_service_1.UserService, mongoose_1.MongooseModule],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=users.module.js.map