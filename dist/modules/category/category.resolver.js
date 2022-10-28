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
exports.CategoryResolver = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const response_status_dto_1 = require("../../common/dto/response-status.dto");
const auth_decorators_1 = require("../../decorators/auth.decorators");
const jwt_auth_guard_1 = require("./../../guards/jwt-auth.guard");
const user_dto_1 = require("./../user/dto/user.dto");
const category_service_1 = require("./category.service");
const category_dto_1 = require("./dto/category.dto");
const create_category_input_1 = require("./dto/create-category.input");
const delete_category_input_1 = require("./dto/delete-category.input");
const update_category_input_1 = require("./dto/update-category.input");
let CategoryResolver = class CategoryResolver {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async createCategory(createCategoryInput) {
        return this.categoryService.create(createCategoryInput);
    }
    async getAllCategory() {
        return this.categoryService.findAll();
    }
    findOne(id) {
        return this.categoryService.findOne(id);
    }
    follow(catId, user) {
        return this.categoryService.follow(user.userId, catId);
    }
    unfollow(catId, user) {
        return this.categoryService.unfollow(user.userId, catId);
    }
    updateCategory(updateCategoryInput) {
        return this.categoryService.update(updateCategoryInput.id, updateCategoryInput);
    }
    removeCategory(id) {
        return this.categoryService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => category_dto_1.CategoryDto, { name: 'createCategory' }),
    __param(0, (0, graphql_1.Args)('createCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_input_1.CreateCategoryInput]),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "createCategory", null);
__decorate([
    (0, graphql_1.Query)(() => [category_dto_1.CategoryDto], { name: 'getAllCategory' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryResolver.prototype, "getAllCategory", null);
__decorate([
    (0, graphql_1.Query)(() => category_dto_1.CategoryDto, { name: 'getDetailCategory' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.ResponseDto, { name: 'followCategory' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('categoryId')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "follow", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_dto_1.ResponseDto, { name: 'unfollowCategory' }),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, graphql_1.Args)('categoryId')),
    __param(1, (0, auth_decorators_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "unfollow", null);
__decorate([
    (0, graphql_1.Mutation)(() => response_status_dto_1.StatusResponseDto, { name: 'updateCategory' }),
    __param(0, (0, graphql_1.Args)('updateCategoryInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_category_input_1.UpdateCategoryInput]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "updateCategory", null);
__decorate([
    (0, graphql_1.Mutation)(() => delete_category_input_1.DeleteCategoryResponseDto, { name: 'deleteCategory' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategoryResolver.prototype, "removeCategory", null);
CategoryResolver = __decorate([
    (0, graphql_1.Resolver)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryResolver);
exports.CategoryResolver = CategoryResolver;
//# sourceMappingURL=category.resolver.js.map