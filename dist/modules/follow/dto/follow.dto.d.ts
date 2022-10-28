import { FOLLOW_STATUS } from 'src/constants/follow';
import { ResponseUserDto } from 'src/modules/user/dto/user.dto';
export declare class FollowObjDto {
    _id: string;
    status: FOLLOW_STATUS;
    followerId: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
}
export declare class FollowDto {
    total: number;
    listUsers: ResponseUserDto[];
}
export declare class FollowDataDto {
    follower: FollowDto;
    following: FollowDto;
}
