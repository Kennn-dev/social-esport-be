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
exports.FollowResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const auth_decorators_1 = require("../../decorators/auth.decorators");
const jwt_auth_guard_1 = require("./../../guards/jwt-auth.guard");
const user_dto_1 = require("./../user/dto/user.dto");
const get_follower_dto_1 = require("./dto/get-follower.dto");
const follow_entity_1 = require("./entities/follow.entity");
const follow_service_1 = require("./follow.service");
let FollowResolver = class FollowResolver {
    constructor(followService) {
        this.followService = followService;
    }
    create(followerId, user) {
        return this.followService.sendRequest(user.userId, followerId);
    }
    unfollow(followerId, user) {
        return this.followService.unfollow(user.userId, followerId);
    }
    getFollowers(user) {
        return this.followService.getUserFollower(user.userId);
    }
    getFollowing(user) {
        return this.followService.getUserFollowing(user.userId);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.ResponseDto, { name: 'follow' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('followerId')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "create", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.ResponseDto, { name: 'unfollow' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('followerId')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "unfollow", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [get_follower_dto_1.FollowerDto], { name: 'getFollowers' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "getFollowers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Query)(() => [get_follower_dto_1.FollowerDto], { name: 'getFollowing' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FollowResolver.prototype, "getFollowing", null);
FollowResolver = __decorate([
    (0, graphql_1.Resolver)(() => follow_entity_1.Follow),
    __metadata("design:paramtypes", [follow_service_1.FollowService])
], FollowResolver);
exports.FollowResolver = FollowResolver;
//# sourceMappingURL=follow.resolver.js.map