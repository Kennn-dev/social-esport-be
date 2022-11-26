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
exports.UserSchema = exports.User = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const bcrypt_1 = require("bcrypt");
const hash_1 = require("../../../constants/hash");
let User = class User {
};
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "backgroundImage", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0 }),
    __metadata("design:type", Number)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "facebookId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null }),
    __metadata("design:type", String)
], User.prototype, "googleId", void 0);
User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
exports.UserSchema.index({
    firstName: 'text',
    lastName: 'text',
    email: 'text',
    phoneNumber: 'text',
});
exports.UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.isModified('password'))
        return next();
    if (user.facebookId)
        return next();
    if (user.googleId)
        return next();
    (0, bcrypt_1.hash)(user.password, hash_1.HASH.SALTROUNDS, function (err, hash) {
        console.log(err, hash);
        if (err)
            return next(err);
        user.password = String(hash);
        next();
    });
});
exports.UserSchema.pre('save', function (next) {
    let user = this;
    if (!user.avatar) {
        user.avatar = `https://source.boringavatars.com/beam/120/${user.firstName + user.lastName}?colors=ff4e0d,2a9d8f,e9c46a,0d52ff,001feb`;
        next();
    }
});
exports.UserSchema.methods.comparePassword = function (incomingPassword) {
    const user = this;
    if (!user.password && (user.facebookId || user.googleId))
        return true;
    return (0, bcrypt_1.compareSync)(incomingPassword, user.password);
};
//# sourceMappingURL=users.schema.js.map