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
exports.CreatePostInputDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const class_validator_1 = require("class-validator");
let CreatePostInputDto = class CreatePostInputDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true, description: 'Max length 2000 characters' }),
    (0, class_validator_1.MaxLength)(2000),
    __metadata("design:type", String)
], CreatePostInputDto.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)((type) => [String], { nullable: true }),
    __metadata("design:type", Array)
], CreatePostInputDto.prototype, "listImage", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], CreatePostInputDto.prototype, "typeView", void 0);
__decorate([
    (0, graphql_1.Field)({ defaultValue: true }),
    __metadata("design:type", Boolean)
], CreatePostInputDto.prototype, "canComment", void 0);
CreatePostInputDto = __decorate([
    (0, graphql_1.InputType)()
], CreatePostInputDto);
exports.CreatePostInputDto = CreatePostInputDto;
//# sourceMappingURL=create-post.input.js.map