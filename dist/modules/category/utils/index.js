"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryGetAllCategory = void 0;
const mongoose_1 = require("mongoose");
const queryGetAllCategory = (match) => {
    const query = [
        {
            $lookup: {
                from: 'users',
                localField: 'followers',
                foreignField: '_id',
                as: 'followers',
            },
        },
    ];
    if (match) {
        query.push({
            $match: {
                _id: new mongoose_1.default.Types.ObjectId(match),
            },
        });
    }
    return query;
};
exports.queryGetAllCategory = queryGetAllCategory;
//# sourceMappingURL=index.js.map