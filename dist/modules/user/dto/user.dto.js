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
exports.ResponseDto = exports.InputCreateUserDto = exports.ResponseUserDetailDto = exports.ResponseLoginDto = exports.ResponseUserDto = exports.InputLoginDto = exports.UserDto = void 0;
const graphql_1 = require("@nestjs/graphql");
const follow_dto_1 = require("../../follow/dto/follow.dto");
let UserDto = class UserDto {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], UserDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserDto.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UserDto.prototype, "backgroundImage", void 0);
UserDto = __decorate([
    (0, graphql_1.ObjectType)()
], UserDto);
exports.UserDto = UserDto;
let InputLoginDto = class InputLoginDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputLoginDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputLoginDto.prototype, "password", void 0);
InputLoginDto = __decorate([
    (0, graphql_1.InputType)()
], InputLoginDto);
exports.InputLoginDto = InputLoginDto;
let ResponseUserDto = class ResponseUserDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDto.prototype, "backgroundImage", void 0);
ResponseUserDto = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseUserDto);
exports.ResponseUserDto = ResponseUserDto;
let ResponseLoginDto = class ResponseLoginDto {
};
__decorate([
    (0, graphql_1.Field)((type) => ResponseUserDto),
    __metadata("design:type", ResponseUserDto)
], ResponseLoginDto.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseLoginDto.prototype, "accessToken", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseLoginDto.prototype, "tokenType", void 0);
ResponseLoginDto = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseLoginDto);
exports.ResponseLoginDto = ResponseLoginDto;
let ResponseUserDetailDto = class ResponseUserDetailDto {
};
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "_id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", Number)
], ResponseUserDetailDto.prototype, "role", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "avatar", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "address", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], ResponseUserDetailDto.prototype, "backgroundImage", void 0);
__decorate([
    (0, graphql_1.Field)(() => follow_dto_1.FollowDto, { defaultValue: {} }),
    __metadata("design:type", follow_dto_1.FollowDto)
], ResponseUserDetailDto.prototype, "follower", void 0);
__decorate([
    (0, graphql_1.Field)(() => follow_dto_1.FollowDto, { defaultValue: {} }),
    __metadata("design:type", follow_dto_1.FollowDto)
], ResponseUserDetailDto.prototype, "following", void 0);
ResponseUserDetailDto = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseUserDetailDto);
exports.ResponseUserDetailDto = ResponseUserDetailDto;
let InputCreateUserDto = class InputCreateUserDto {
};
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputCreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputCreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputCreateUserDto.prototype, "email", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputCreateUserDto.prototype, "password", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: false }),
    __metadata("design:type", String)
], InputCreateUserDto.prototype, "passwordConfirm", void 0);
InputCreateUserDto = __decorate([
    (0, graphql_1.InputType)()
], InputCreateUserDto);
exports.InputCreateUserDto = InputCreateUserDto;
let ResponseDto = class ResponseDto {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], ResponseDto.prototype, "status", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], ResponseDto.prototype, "message", void 0);
ResponseDto = __decorate([
    (0, graphql_1.ObjectType)()
], ResponseDto);
exports.ResponseDto = ResponseDto;
//# sourceMappingURL=user.dto.js.map