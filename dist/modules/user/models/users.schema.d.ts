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
import { Schema as MongooseSchema } from 'mongoose';
export declare type UserDocument = User & Document;
export declare class User {
    _id: MongooseSchema.Types.ObjectId;
    lastName: string;
    firstName: string;
    email: string;
    password: string;
    avatar: string;
    backgroundImage: string;
    address: string;
    phoneNumber: string;
    role: number;
    facebookId: string;
    googleId: string;
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any>, {}, {}, any>;
