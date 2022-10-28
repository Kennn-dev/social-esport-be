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
exports.PostResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const response_status_dto_1 = require("../../common/dto/response-status.dto");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const decorator_1 = require("../user/decorator");
const create_post_input_1 = require("./dto/create-post.input");
const update_post_input_1 = require("./dto/update-post.input");
const posts_service_1 = require("./posts.service");
let PostResolver = class PostResolver {
    constructor(postService) {
        this.postService = postService;
    }
    async createPost(inputCreate, user) {
        return this.postService.create(inputCreate, user);
    }
    async updatePost(inputUpdate, id, user) {
        return this.postService.update(id, inputUpdate, user);
    }
    async deletePost(id, user) {
        return this.postService.remove(id, user);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'createPost' }),
    __param(0, (0, graphql_1.Args)('inputCreate')),
    __param(1, (0, decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_input_1.CreatePostInputDto, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "createPost", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'updatePost' }),
    __param(0, (0, graphql_1.Args)('inputUpdate')),
    __param(1, (0, graphql_1.Args)('id')),
    __param(2, (0, decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_post_input_1.UpdatePostInputDto, String, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "updatePost", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'deletePost' }),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PostResolver.prototype, "deletePost", null);
PostResolver = __decorate([
    (0, graphql_1.Resolver)('post'),
    __metadata("design:paramtypes", [posts_service_1.PostService])
], PostResolver);
exports.PostResolver = PostResolver;
//# sourceMappingURL=posts.resolver.js.map