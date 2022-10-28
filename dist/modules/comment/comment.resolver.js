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
exports.CommentResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const response_status_dto_1 = require("../../common/dto/response-status.dto");
const auth_decorators_1 = require("../../decorators/auth.decorators");
const jwt_auth_guard_1 = require("../../guards/jwt-auth.guard");
const comment_service_1 = require("./comment.service");
const create_comment_input_1 = require("./dto/create-comment.input");
const update_comment_input_1 = require("./dto/update-comment.input");
let CommentResolver = class CommentResolver {
    constructor(commentService) {
        this.commentService = commentService;
    }
    async createComment(createCommentInput, user) {
        return this.commentService.create(user.userId, createCommentInput);
    }
    updateComment(user, idComment, updateCommentInput) {
        return;
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'createComment' }),
    __param(0, (0, graphql_1.Args)('createCommentInput')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_comment_input_1.CreateCommentInput, Object]),
    __metadata("design:returntype", Promise)
], CommentResolver.prototype, "createComment", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'updateComment' }),
    __param(0, (0, auth_decorators_1.CurrentUser)()),
    __param(1, (0, graphql_1.Args)('idComment')),
    __param(2, (0, graphql_1.Args)('updateCommentInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_comment_input_1.UpdateCommentInput]),
    __metadata("design:returntype", void 0)
], CommentResolver.prototype, "updateComment", null);
CommentResolver = __decorate([
    (0, graphql_1.Resolver)('comment'),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], CommentResolver);
exports.CommentResolver = CommentResolver;
//# sourceMappingURL=comment.resolver.js.map