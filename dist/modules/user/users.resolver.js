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
exports.UserResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const response_status_dto_1 = require("../../common/dto/response-status.dto");
const auth_decorators_1 = require("../../decorators/auth.decorators");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const change_password_input_dto_1 = require("./dto/change-password-input.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const user_dto_1 = require("./dto/user.dto");
const users_schema_1 = require("./models/users.schema");
const users_service_1 = require("./users.service");
let UserResolver = class UserResolver {
    constructor(userService) {
        this.userService = userService;
    }
    async hello() {
        return 'Hello from user';
    }
    async getAllUser() {
        return this.userService.findAll();
    }
    async getUser(id) {
        return this.userService.getUserById(id);
    }
    async createNewUser(inputCreate) {
        const user = await this.userService.create(inputCreate);
        console.log(user);
        if (user) {
            return {
                status: common_1.HttpStatus.OK,
                message: 'Created succesfully !',
            };
        }
    }
    async updateUser(id, inputUpdate, user) {
        return this.userService.update(id, inputUpdate, user);
    }
    async changePassword(input, user) {
        return this.userService.changePassword(input, user);
    }
    async getFriendsList() {
        return this.userService.findAll();
    }
    async sendFriendRequest(friendId, user) {
        return this.userService.sendFriendRequest(friendId, user);
    }
    async replyFriendRequest(requesterId, isAccept, user) {
        return this.userService.replyFriendRequest(requesterId, user, isAccept);
    }
};
__decorate([
    (0, graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "hello", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getAllUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => user_dto_1.ResponseUserDetailDto, { name: 'getUserById' }),
    __param(0, (0, graphql_1.Args)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'createUser' }),
    __param(0, (0, graphql_1.Args)('inputCreate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.InputCreateUserDto]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createNewUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('inputUpdate')),
    __param(2, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserInputDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('input')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [change_password_input_dto_1.ChangePasswordInputDto, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "changePassword", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [user_dto_1.UserDto]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getFriendsList", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'sendFriendRequest' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('friendId')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "sendFriendRequest", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'replyFriendRequest' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('requesterId')),
    __param(1, (0, graphql_1.Args)('isAccept')),
    __param(2, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "replyFriendRequest", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(users_schema_1.User),
    __metadata("design:paramtypes", [users_service_1.UserService])
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=users.resolver.js.map