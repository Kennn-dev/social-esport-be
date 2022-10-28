"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAvatarFacebook = void 0;
const getAvatarFacebook = (id, accessToken, type) => {
    return `https://graph.facebook.com/${id}/picture?access_token=${accessToken}&type=${type}`;
};
exports.getAvatarFacebook = getAvatarFacebook;
//# sourceMappingURL=facebook.js.map