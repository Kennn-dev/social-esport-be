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
exports.CategoryDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_dto_1 = require("../../user/dto/user.dto");
let CategoryDto = class CategoryDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryDto.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CategoryDto.prototype, "thumbnail", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_dto_1.ResponseUserDto], { nullable: true }),
    __metadata("design:type", user_dto_1.ResponseUserDto)
], CategoryDto.prototype, "followers", void 0);
CategoryDto = __decorate([
    (0, graphql_1.ObjectType)()
], CategoryDto);
exports.CategoryDto = CategoryDto;
//# sourceMappingURL=category.dto.js.map