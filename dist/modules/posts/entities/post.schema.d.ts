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
import { Schema as MongooseSchema, Types } from 'mongoose';
import { TYPE_POST_VIEW } from 'src/constants/post';
import { TTimestamp } from 'src/types/common';
export declare type PostDocument = Post & Document & TTimestamp;
export declare class Post {
    _id: MongooseSchema.Types.ObjectId;
    content: string;
    listImage: string[];
    typeView: TYPE_POST_VIEW;
    canComment: boolean;
    author: string | Types.ObjectId;
}
export declare const PostSchema: MongooseSchema<Post, import("mongoose").Model<Post, any, any, any, any>, {}, {}, {}, {}, "type", Post>;
