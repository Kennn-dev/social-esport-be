/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
import { UserService } from './../user/users.service';
import { Model } from 'mongoose';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
import { Category, CategoryDocument } from './models/category.schema';
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
export declare class CategoryService {
    private categoryModel;
    private readonly userService;
    constructor(categoryModel: Model<CategoryDocument>, userService: UserService);
    create(createCategoryInput: CreateCategoryInput): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): import("mongoose").Query<Category & import("mongoose").Document<any, any, any> & import("../../types/common").TTimestamp & {
        _id: any;
    }, Category & import("mongoose").Document<any, any, any> & import("../../types/common").TTimestamp & {
        _id: any;
    }, {}, CategoryDocument>;
    follow(userId: string, categoryId: string): Promise<StatusResponseDto>;
    unfollow(userId: string, categoryId: string): Promise<StatusResponseDto>;
    update(id: string, updateCategoryInput: UpdateCategoryInput): Promise<StatusResponseDto>;
    remove(id: string): Promise<StatusResponseDto>;
}
