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
var FollowDataDto_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FollowDataDto = exports.FollowDto = exports.FollowObjDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const follow_1 = require("../../../constants/follow");
const user_dto_1 = require("../../user/dto/user.dto");
let FollowObjDto = class FollowObjDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FollowObjDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], FollowObjDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FollowObjDto.prototype, "followerId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], FollowObjDto.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], FollowObjDto.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Date)
], FollowObjDto.prototype, "updatedAt", void 0);
FollowObjDto = __decorate([
    (0, graphql_1.ObjectType)()
], FollowObjDto);
exports.FollowObjDto = FollowObjDto;
let FollowDto = class FollowDto {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], FollowDto.prototype, "total", void 0);
__decorate([
    (0, graphql_1.Field)(() => [user_dto_1.ResponseUserDto]),
    __metadata("design:type", Array)
], FollowDto.prototype, "listUsers", void 0);
FollowDto = __decorate([
    (0, graphql_1.ObjectType)()
], FollowDto);
exports.FollowDto = FollowDto;
let FollowDataDto = FollowDataDto_1 = class FollowDataDto {
};
__decorate([
    (0, graphql_1.Field)(() => [FollowDataDto_1]),
    __metadata("design:type", FollowDto)
], FollowDataDto.prototype, "follower", void 0);
__decorate([
    (0, graphql_1.Field)(() => [FollowDataDto_1]),
    __metadata("design:type", FollowDto)
], FollowDataDto.prototype, "following", void 0);
FollowDataDto = FollowDataDto_1 = __decorate([
    (0, graphql_1.ObjectType)()
], FollowDataDto);
exports.FollowDataDto = FollowDataDto;
//# sourceMappingURL=follow.dto.js.map