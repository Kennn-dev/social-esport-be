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
  /**
   *
   * if a follow b
   * and a follow c
   * find all who a following => userId = a id
   * find all who follow a => followerid = a id
   *
   * 3 status
   * 0 : not relationship
   * 1 : you are following them
   * 2 : they are follow u , and u haven't follow back yet
   * 3 : follow each other
   *
   * if a follow b => status 1 for ab , status 2 for ba
   * if b follow a => status 2 for ba before ? status 3 : status 1
   * if a unfollow b => status 3 for ab before ? status 1 for ba and status 2 for ab
   * if a unfollow b => status 1 for ab before ? delete both
   * if b unfollow a => status 1 for ba and status 2 for ab before ? delete ba and delete ab
   * a / b => b/a
   */
  async sendRequest(
    senderId: string,
    followerId: string,
  ): Promise<ResponseDto> {
    try {
      if (senderId === followerId) {
        throw new Error('You adready follow yourself ! :)');
      }
      const sender = await this.userService.findOne({
        _id: toObjectId(senderId),
      });

      const follower = await this.userService.findOne({
        _id: toObjectId(followerId),
      });
      if (!sender || !follower) throw new Error("User doesn't exits bruhh");
      // find people doc
      const userGotFollowed = await this.followModel.findOne({
        userId: follower._id,
        followerId: sender._id,
      });

      // someone follow u before
      const isRequested = await this.followModel.findOne({
        followerId: follower._id,
        userId: sender._id,
      });

      if (isRequested) {
        if (isRequested.status === FOLLOW_STATUS.FOLLOW_BACK) {
          isRequested.status = FOLLOW_STATUS.FOLLOWED;
          userGotFollowed.status = FOLLOW_STATUS.FOLLOWED;

          await isRequested.save();
          await userGotFollowed.save();
        }
        // handle
        return {
          message: 'Success',
          status: HttpStatus.OK,
        };
      }
      // throw new Error('You have already submitted this request');

      let data = {
        followerId: follower._id,
        userId: sender._id,
        status: FOLLOW_STATUS.FOLLOWING,
      };
      if (
        userGotFollowed &&
        userGotFollowed.status === FOLLOW_STATUS.FOLLOWING
      ) {
        data.status = FOLLOW_STATUS.FOLLOWED;
        userGotFollowed.status = FOLLOW_STATUS.FOLLOWED;
        userGotFollowed.save();
      } else {
        const newUserFollowed = new this.followModel({
          userId: follower._id,
          followerId: sender._id,
          status: FOLLOW_STATUS.FOLLOW_BACK,
        });
        newUserFollowed.save();
      }

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
      if (senderId === followerId) {
        throw new Error('You adready follow yourself ! :)');
      }
      const sender = await this.userService.findOne({
        _id: toObjectId(senderId),
      });
      const follower = await this.userService.findOne({
        _id: toObjectId(followerId),
      });
      if (!sender || !follower) {
        throw new Error('Invalid request');
      }
      const follow = await this.followModel.findOne({
        userId: sender._id,
        followerId: follower._id,
      });
      const theirFollow = await this.followModel.findOne({
        followerId: sender._id,
        userId: follower._id,
      });

      console.log(JSON.stringify(follow));
      console.log(JSON.stringify(theirFollow));
      if (!follow) throw new Error('Invalid Request');
      if (follow.status === FOLLOW_STATUS.FOLLOWED) {
        theirFollow.status = FOLLOW_STATUS.FOLLOWING;
        follow.status = FOLLOW_STATUS.FOLLOW_BACK;

        await follow.save();
        await theirFollow.save();
      } else if (follow.status === FOLLOW_STATUS.FOLLOWING) {
        follow.deleteOne();
        theirFollow.deleteOne();

        return {
          message: 'Unfollowed',
          status: HttpStatus.OK,
        };
      }
      // const isCompleted = await this.followModel.findOneAndDelete({
      //   userId: sender._id,
      //   followerId: follower._id,
      // });
      // if (!isCompleted) throw new Error('Invalid request');

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
}
