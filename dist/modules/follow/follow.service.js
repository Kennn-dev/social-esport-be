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
exports.FollowService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const follow_1 = require("../../constants/follow");
const errors_1 = require("../../utils/errors");
const users_service_1 = require("../user/users.service");
const follow_schema_1 = require("./entities/follow.schema");
const utils_1 = require("./utils");
let FollowService = class FollowService {
    constructor(userService, followModel) {
        this.userService = userService;
        this.followModel = followModel;
    }
    async sendRequest(senderId, followerId) {
        try {
            const sender = await this.userService.findOne({ id: senderId });
            const follower = await this.userService.findOne({ id: followerId });
            if (!sender || !follower)
                throw new Error("User doesn't exits bruhh");
            const isRequested = await this.followModel.findOne({
                followerId,
                userId: senderId,
            });
            if (isRequested)
                throw new Error('You have already submitted this request');
            const data = {
                followerId,
                userId: senderId,
                status: follow_1.FOLLOW_STATUS.HOLD,
            };
            const result = new this.followModel(data);
            await result.save();
            return {
                message: 'Success',
                status: common_1.HttpStatus.OK,
            };
        }
        catch (error) {
            console.log(error);
            (0, errors_1.handleError)(error);
        }
    }
    async unfollow(followId) {
        try {
            const isCompleted = await this.followModel.findByIdAndDelete(followId);
            if (isCompleted) {
                return {
                    message: 'Unfollowed',
                    status: common_1.HttpStatus.OK,
                };
            }
        }
        catch (error) {
            console.log(error);
            (0, errors_1.handleError)(error);
        }
    }
    async replyRequest(senderId, status) {
        try {
            const follower = await this.followModel.findOne({
                followerId: senderId,
            });
            if (!follower)
                throw new common_1.HttpException('Cannot find User', 503);
            follower.status = status;
            follower.save();
            return {
                status: common_1.HttpStatus.OK,
                message: 'Success',
            };
        }
        catch (error) {
            (0, errors_1.handleError)(error);
        }
    }
    async findOne(params) {
        return this.followModel.findOne(params);
    }
    async findAll() {
        return this.followModel.find();
    }
    async getUserFollowData(userId) {
        const aggregateQueryFollower = (0, utils_1.aggregateUser)({
            userId: new mongoose_2.default.Types.ObjectId(userId),
        }, {
            localField: 'followerId',
            as: 'follower',
        });
        const followerDt = await this.followModel
            .aggregate(aggregateQueryFollower)
            .exec();
        const countFollower = await this.followModel
            .find({
            userId: new mongoose_2.default.Types.ObjectId(userId),
        })
            .count();
        const listUserFollower = followerDt.map((fl) => (Object.assign(Object.assign({}, fl.follower[0]), { _id: fl.follower[0].id.toString() })));
        const aggregateQueryFollowing = (0, utils_1.aggregateUser)({
            followerId: new mongoose_2.default.Types.ObjectId(userId),
        }, {
            localField: 'userId',
            as: 'following',
        });
        const followingDt = await this.followModel
            .aggregate(aggregateQueryFollowing)
            .exec();
        const countFollowing = await this.followModel
            .find({
            followerId: new mongoose_2.default.Types.ObjectId(userId),
        })
            .count();
        const listUserFollowing = followingDt.map((fl) => (Object.assign(Object.assign({}, fl.following[0]), { _id: fl.following[0].id.toString() })));
        return {
            follower: { listUsers: listUserFollower, total: countFollower },
            following: { listUsers: listUserFollowing, total: countFollowing },
        };
    }
    update(id) {
        return `This action updates a #${id} follow`;
    }
    remove(id) {
        return `This action removes a #${id} follow`;
    }
};
FollowService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)((0, common_1.forwardRef)(() => users_service_1.UserService))),
    __param(1, (0, mongoose_1.InjectModel)(follow_schema_1.Follow.name)),
    __metadata("design:paramtypes", [users_service_1.UserService,
        mongoose_2.Model])
], FollowService);
exports.FollowService = FollowService;
//# sourceMappingURL=follow.service.js.map