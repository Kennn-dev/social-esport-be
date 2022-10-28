"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleAfterLogin = void 0;
const user_1 = require("../constants/user");
function handleAfterLogin(user, payload, type, cb) {
    const { googleId, facebookId } = user;
    switch (type) {
        case user_1.TypeLogin.GOOGLE:
            if (!googleId) {
                user.googleId = payload.user.id;
                user.avatar = payload.user.avatar;
                user.save();
            }
            break;
        case user_1.TypeLogin.FACEBOOK:
            if (!facebookId) {
                user.facebookId = payload.user.id;
                user.avatar = payload.user.avatar;
                user.save();
            }
            break;
        default:
            break;
    }
    return cb();
}
exports.handleAfterLogin = handleAfterLogin;
//# sourceMappingURL=socialLogin.js.map