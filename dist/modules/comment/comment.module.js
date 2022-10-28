"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const posts_module_1 = require("../posts/posts.module");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const comment_resolver_1 = require("./comment.resolver");
const comment_service_1 = require("./comment.service");
const comment_schema_1 = require("./entities/comment.schema");
let CommentModule = class CommentModule {
};
CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: comment_schema_1.Comment.name, schema: comment_schema_1.CommentSchema }]),
            posts_module_1.PostsModule,
        ],
        providers: [comment_resolver_1.CommentResolver, comment_service_1.CommentService],
        exports: [mongoose_1.MongooseModule, comment_service_1.CommentService],
    })
], CommentModule);
exports.CommentModule = CommentModule;
//# sourceMappingURL=comment.module.js.map