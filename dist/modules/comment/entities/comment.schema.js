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
exports.CommentSchema = exports.Comment = void 0;
const post_schema_1 = require("../../posts/entities/post.schema");
const users_schema_1 = require("../../user/models/users.schema");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const post_1 = require("./../../../constants/post");
let Comment = class Comment {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: users_schema_1.User.name }),
    __metadata("design:type", String)
], Comment.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.ObjectId, ref: post_schema_1.Post.name }),
    __metadata("design:type", String)
], Comment.prototype, "postId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Comment.prototype, "content", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: post_1.TYPE_POST.FEED }),
    __metadata("design:type", String)
], Comment.prototype, "type", void 0);
Comment = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Comment);
exports.Comment = Comment;
exports.CommentSchema = mongoose_1.SchemaFactory.createForClass(Comment);
//# sourceMappingURL=comment.schema.js.map