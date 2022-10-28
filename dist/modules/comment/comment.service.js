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
exports.CommentService = void 0;
const posts_service_1 = require("../posts/posts.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const comment_schema_1 = require("./entities/comment.schema");
let CommentService = class CommentService {
    constructor(postService, commentModel) {
        this.postService = postService;
        this.commentModel = commentModel;
    }
    async create(idUser, createCommentInput) {
        if (!idUser)
            throw new common_1.HttpException('User Id invalid', 400);
        if (!idUser)
            throw new common_1.HttpException('Cannot find user', 400);
        const post = this.postService.findOne({ id: createCommentInput.postId });
        if (!post)
            throw new common_1.HttpException('Invalid Post', 400);
        const comment = new this.commentModel(createCommentInput);
        await comment.save();
        return {
            message: 'Action Success ',
            status: common_1.HttpStatus.OK,
        };
    }
    findAll() {
        return `This action returns all comment`;
    }
    findOne(id) {
        return `This action returns a #${id} comment`;
    }
    async update(idUser, idComment, createCommentInput) {
        if (!idUser)
            throw new common_1.HttpException('User Id invalid', 400);
        if (!idUser)
            throw new common_1.HttpException('Cannot find user', 400);
        const post = this.postService.findOne({ id: createCommentInput.postId });
        if (!post)
            throw new common_1.HttpException('Invalid Post', 400);
        const comment = await this.commentModel.findById(idComment);
        await comment.save();
        return {
            message: 'Action Success ',
            status: common_1.HttpStatus.OK,
        };
    }
    remove(id) {
        return `This action removes a #${id} comment`;
    }
};
CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectModel)(comment_schema_1.Comment.name)),
    __metadata("design:paramtypes", [posts_service_1.PostService,
        mongoose_2.Model])
], CommentService);
exports.CommentService = CommentService;
//# sourceMappingURL=comment.service.js.map