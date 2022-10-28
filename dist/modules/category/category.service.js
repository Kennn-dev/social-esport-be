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
exports.CategoryService = void 0;
const users_service_1 = require("./../user/users.service");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const category_schema_1 = require("./models/category.schema");
const errors_1 = require("../../utils/errors");
const utils_1 = require("./utils");
let CategoryService = class CategoryService {
    constructor(categoryModel, userService) {
        this.categoryModel = categoryModel;
        this.userService = userService;
    }
    async create(createCategoryInput) {
        const category = new this.categoryModel(createCategoryInput);
        await category.save();
        return category;
    }
    async findAll() {
        const query = (0, utils_1.queryGetAllCategory)();
        return this.categoryModel.aggregate(query);
    }
    findOne(id) {
        return this.categoryModel.findById(id);
    }
    async follow(userId, categoryId) {
        try {
            const user = await this.userService.findOne({
                _id: new mongoose_1.Types.ObjectId(userId),
            });
            const category = await this.categoryModel.findById(categoryId);
            category.followers.push(user._id);
            await category.save();
            return {
                message: 'OK',
                status: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async unfollow(userId, categoryId) {
        try {
            const user = await this.userService.findOne({
                _id: new mongoose_1.Types.ObjectId(userId),
            });
            if (!user)
                throw new Error('User id not found');
            const category = await this.categoryModel.findById(categoryId);
            const followers = category.followers.filter((v) => v.toString() !== userId);
            category.followers = followers;
            await category.save();
            return {
                message: 'OK',
                status: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async update(id, updateCategoryInput) {
        try {
            const { thumbnail, title } = updateCategoryInput;
            const category = await this.categoryModel.findByIdAndUpdate(id, {
                thumbnail,
                title,
            });
            const res = await category.save();
            if (res) {
                return {
                    status: common_1.HttpStatus.OK,
                    message: 'Update Success',
                };
            }
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async remove(id) {
        const res = await this.categoryModel.findByIdAndRemove(id);
        try {
            if (!res)
                throw new common_1.NotFoundException('Cannot find category :( ');
            if (res) {
                return {
                    status: common_1.HttpStatus.OK,
                    message: 'Delete success ',
                };
            }
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_1.Model,
        users_service_1.UserService])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map