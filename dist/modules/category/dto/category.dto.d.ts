import { ResponseUserDto } from 'src/modules/user/dto/user.dto';
export declare class CategoryDto {
    _id: string;
    title: string;
    thumbnail: string;
    followers: ResponseUserDto;
}
