import { FollowDto, FollowObjDto } from 'src/modules/follow/dto/follow.dto';
export declare class UserDto {
    _id: string;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    avatar: string;
    backgroundImage: string;
}
export declare class InputLoginDto {
    email: string;
    password: string;
}
export declare class ResponseUserDto {
    _id: string;
    lastName: string;
    firstName: string;
    email: string;
    address: string;
    phoneNumber: string;
    avatar: string;
    backgroundImage: string;
}
export declare class SearchResponseUserDto extends ResponseUserDto {
    follow: FollowObjDto[];
}
export declare class ResponseLoginDto {
    user: ResponseUserDto;
    accessToken: string;
    tokenType: string;
}
export declare class ResponseUserDetailDto {
    _id: string;
    lastName: string;
    firstName: string;
    email: string;
    role: number;
    avatar: string;
    address: string;
    phoneNumber: string;
    backgroundImage: string;
    follower: FollowDto;
    following: FollowDto;
}
export declare class InputCreateUserDto {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    passwordConfirm: string;
}
export declare class ResponseDto {
    status: number;
    message: string;
}
