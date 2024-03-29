"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aggregateUser = void 0;
const aggregateUser = (match, fieldName) => {
    return [
        {
            $match: {
                match,
            },
        },
        {
            $lookup: {
                from: 'users',
                localField: fieldName.localField,
                foreignField: '_id',
                as: fieldName.as,
            },
        },
        {
            $project: {
                _id: 1,
                status: 1,
                followerId: 1,
                userId: 1,
                createdAt: 1,
                updatedAt: 1,
                [`${fieldName.as}._id`]: 1,
                [`${fieldName.as}.firstName`]: 1,
                [`${fieldName.as}.lastName`]: 1,
                [`${fieldName.as}.email`]: 1,
                [`${fieldName.as}.avatar`]: 1,
                [`${fieldName.as}.backgroundImage`]: 1,
            },
        },
    ];
};
exports.aggregateUser = aggregateUser;
//# sourceMappingURL=index.js.map