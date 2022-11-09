/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
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
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { StatusResponseDto } from 'src/common/dto/response-status.dto';
import { TCurrentUser } from 'src/types/user';
import { CategoryService } from './category.service';
import { CreateCategoryInput } from './dto/create-category.input';
import { UpdateCategoryInput } from './dto/update-category.input';
export declare class CategoryResolver {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    createCategory(createCategoryInput: CreateCategoryInput): Promise<import("./models/category.schema").Category>;
    getAllCategory(): Promise<import("./models/category.schema").Category[]>;
    findOne(id: number): import("mongoose").Query<import("./models/category.schema").Category & import("mongoose").Document<any, any, any> & import("../../types/common").TTimestamp & {
        _id: import("mongoose").Types.ObjectId;
    }, import("./models/category.schema").Category & import("mongoose").Document<any, any, any> & import("../../types/common").TTimestamp & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./models/category.schema").CategoryDocument>;
    follow(catId: string, user: TCurrentUser): Promise<StatusResponseDto>;
    unfollow(catId: string, user: TCurrentUser): Promise<StatusResponseDto>;
    updateCategory(updateCategoryInput: UpdateCategoryInput): Promise<StatusResponseDto>;
    removeCategory(id: string): Promise<StatusResponseDto>;
}
