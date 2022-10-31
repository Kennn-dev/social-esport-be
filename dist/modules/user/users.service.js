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
exports.UserService = void 0;
const follow_service_1 = require("./../follow/follow.service");
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const mongoose_2 = require("@nestjs/mongoose");
const users_schema_1 = require("./models/users.schema");
const errors_1 = require("../../utils/errors");
let UserService = class UserService {
    constructor(userModel, followService) {
        this.userModel = userModel;
        this.followService = followService;
    }
    async findAll() {
        return await this.userModel.find().exec();
    }
    async createUserWithSocialAccount(data) {
        try {
            const { email, facebookId, googleId } = data;
            const userCheck = await this.userModel.findOne({ email });
            if (userCheck)
                throw new common_1.HttpException('Sorry, This e-mail is already taken ', 400);
            if (facebookId) {
                console.log(data);
                const user = new this.userModel(data);
                return await user.save();
            }
            if (googleId) {
                const user = new this.userModel(data);
                return await user.save();
            }
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async create(createUserDto) {
        try {
            const { password, passwordConfirm, email } = createUserDto;
            const userCheck = await this.userModel.findOne({ email });
            if (userCheck)
                throw new common_1.HttpException('Sorry, This e-mail is already taken ', 400);
            if (password !== passwordConfirm)
                throw new common_1.HttpException('Password and Password confirm are not match', 400);
            const user = new this.userModel(createUserDto);
            return await user.save();
        }
        catch (error) {
            console.log(error);
            (0, errors_1.handleError)(error);
        }
    }
    async getUserById(id) {
        try {
            const user = await this.userModel.findById(id);
            const follow = await this.followService.getUserFollowData(user._id.toString());
            const { _id, avatar, backgroundImage, email, firstName, lastName, role, address, phoneNumber, } = user;
            const res = {
                _id: _id.toString(),
                avatar,
                backgroundImage,
                email,
                role,
                firstName,
                lastName,
                address,
                phoneNumber,
                follower: follow.follower,
                following: follow.following,
            };
            console.log(res.follower.listUsers);
            return res;
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async findOne(params) {
        const user = await this.userModel.findOne(params);
        return user;
    }
    async update(id, data, userReq) {
        try {
            const user = await this.userModel.findByIdAndUpdate(id, data);
            console.log(user._id.toString(), userReq.userId, user._id.toString() == userReq.userId);
            if (user && user._id.toString() == userReq.userId) {
                return {
                    status: common_1.HttpStatus.OK,
                    message: 'Update Success',
                };
            }
            return {
                status: common_1.HttpStatus.UNAUTHORIZED,
                message: 'Invalid Request',
            };
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(users_schema_1.User.name)),
    __param(1, (0, common_1.Inject)((0, common_1.forwardRef)(() => follow_service_1.FollowService))),
    __metadata("design:paramtypes", [mongoose_1.Model,
        follow_service_1.FollowService])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=users.service.js.map