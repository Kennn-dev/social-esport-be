import { forwardRef, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { FOLLOW_STATUS } from 'src/constants/follow';
import { toObjectId } from 'src/utils';
import { handleError } from 'src/utils/errors';
import { UserService } from '../user/users.service';
import { ResponseDto } from './../user/dto/user.dto';
import { FollowDataDto } from './dto/follow.dto';
import { FollowerDto } from './dto/get-follower.dto';
import { Follow, FollowDocument } from './entities/follow.schema';
import { aggregateUser } from './utils';

@Injectable()
export class FollowService {
  constructor(
    @Inject(forwardRef(() => UserService))
    private userService: UserService,
    @InjectModel(Follow.name) private followModel: Model<FollowDocument>,
  ) {}

  async sendRequest(
    senderId: string,
    followerId: string,
  ): Promise<ResponseDto> {
    try {
      console.log({ followerId, senderId });
      const sender = await this.userService.findOne({
        _id: toObjectId(senderId),
      });

      const follower = await this.userService.findOne({
        _id: toObjectId(followerId),
      });
      if (!sender || !follower) throw new Error("User doesn't exits bruhh");
      const isRequested = await this.followModel.findOne({
        followerId: follower._id,
        userId: sender._id,
      });
      if (isRequested)
        throw new Error('You have already submitted this request');

      const data = {
        followerId: follower._id,
        userId: sender._id,
        status: FOLLOW_STATUS.HOLD,
      };
      console.log(data);

      const result = new this.followModel(data);
      await result.save();
      return {
        message: 'Success',
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }

  async unfollow(senderId: string, followerId: string): Promise<ResponseDto> {
    try {
      const sender = await this.userService.findOne({ id: senderId });
      const follower = await this.userService.findOne({ id: followerId });
      if (!sender || !follower) {
        throw new Error('Invalid request');
      }
      const isCompleted = await this.followModel.findOneAndDelete({
        userId: sender._id,
        followerId: follower._id,
      });
      if (!isCompleted) throw new Error('Invalid request');
      return {
        message: 'Unfollowed',
        status: HttpStatus.OK,
      };
    } catch (error) {
      console.log(error);
      handleError(error);
    }
  }

  // /**
  //  *
  //  * @param senderId : Who is FollowerId in database
  //  * @param status
  //  */
  // async replyRequest(
  //   senderId: string,
  //   status: FOLLOW_STATUS,
  // ): Promise<ResponseDto> {
  //   try {
  //     const follower = await this.followModel.findOne({
  //       followerId: senderId,
  //     });
  //     if (!follower) throw new HttpException('Cannot find User', 503);
  //     follower.status = status;
  //     follower.save();
  //     return {
  //       status: HttpStatus.OK,
  //       message: 'Success',
  //     };
  //   } catch (error) {
  //     handleError(error);
  //   }
  // }

  async findOne(params: any): Promise<Follow> {
    return this.followModel.findOne(params);
  }

  async findAll(): Promise<Follow[]> {
    return this.followModel.find();
  }

  /**
   *
   * if a follow b
   * and a follow c
   * find all who a following => userId = a id
   * find all who follow a => followerid = a id
   * @param id : requester
   */
  async getUserFollowData(userId: string): Promise<FollowDataDto> {
    // Who are follow "user" => this user is userId
    const aggregateQueryFollower = aggregateUser(
      {
        userId: new mongoose.Types.ObjectId(userId),
      },
      {
        localField: 'followerId',
        as: 'follower',
      },
    );
    const followerDt = await this.followModel
      .aggregate(aggregateQueryFollower)
      .exec();
    const countFollower = await this.followModel
      .find({
        userId: new mongoose.Types.ObjectId(userId),
      })
      .count();
    // console.log({ countFollower });
    const listUserFollower = followerDt.map((fl) => ({
      ...fl.follower[0],
      _id: fl.follower[0].id.toString(),
    }));
    // Who this "user" following => this user is followerId
    const aggregateQueryFollowing = aggregateUser(
      {
        followerId: new mongoose.Types.ObjectId(userId),
      },
      {
        localField: 'userId',
        as: 'following',
      },
    );
    const followingDt = await this.followModel
      .aggregate(aggregateQueryFollowing)
      .exec();

    const countFollowing = await this.followModel
      .find({
        followerId: new mongoose.Types.ObjectId(userId),
      })
      .count();

    const listUserFollowing = followingDt.map((fl) => ({
      ...fl.following[0],
      _id: fl.following[0].id.toString(),
    }));
    return {
      follower: { listUsers: listUserFollower, total: countFollower },
      following: { listUsers: listUserFollowing, total: countFollowing },
    };
  }

  async getUserFollower(userId: string): Promise<FollowerDto[]> {
    const query = [
      {
        $match: {
          followerId: toObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'userId',
          foreignField: '_id',
          as: 'user',
          pipeline: [
            {
              $project: {
                _id: 1,

                lastName: 1,

                firstName: 1,

                email: 1,

                address: 1,

                phoneNumber: 1,

                avatar: 1,
                backgroundImage: 1,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: '$user',
          preserveNullAndEmptyArrays: true,
        },
      },
      {
        $limit: 10,
      },
    ];

    const result = this.followModel.aggregate<FollowerDto>(query);
    return result;
  }
  async getUserFollowing(userId: string): Promise<FollowerDto[]> {
    const query = [
      {
        $match: {
          userId: toObjectId(userId),
        },
      },
      {
        $lookup: {
          from: 'users',
          localField: 'followerId',
          foreignField: '_id',
          as: 'user',
          pipeline: [
            {
              $project: {
                password: 0,
              },
            },
          ],
        },
      },
      {
        $unwind: {
          path: '$user',
          // preserveNullAndEmptyArrays: true,
        },
      },
      {
        $limit: 10,
      },
    ];

    const result = this.followModel.aggregate<FollowerDto>(query);

    return result;
  }

  update(id: number) {
    return `This action updates a #${id} follow`;
  }

  remove(id: number) {
    return `This action removes a #${id} follow`;
  }
}
