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
/// <reference types="mongoose/types/inferschematype" />
import { Schema as MongooseSchema } from 'mongoose';
import { Document } from 'mongoose';
import { TTimestamp } from 'src/types/common';
export declare type CategoryDocument = Category & Document & TTimestamp;
export declare class Category {
    _id: MongooseSchema.Types.ObjectId;
    title: string;
    thumbnail: string;
    followers: MongooseSchema.Types.ObjectId[];
}
export declare const CategorySchema: MongooseSchema<Category, import("mongoose").Model<Category, any, any, any, any>, {}, {}, {}, {}, "type", Category>;
