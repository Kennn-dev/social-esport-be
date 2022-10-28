"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const role_guard_1 = require("../guards/role.guard");
const jwt_auth_guard_1 = require("./../guards/jwt-auth.guard");
function Auth(...roles) {
    return (0, common_1.applyDecorators)((0, common_1.SetMetadata)('roles', roles), (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard));
}
exports.Auth = Auth;
exports.CurrentUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const user = ctx.getArgs()[2].req.user;
    console.log('Userr===========', user);
    return user;
});
//# sourceMappingURL=auth.decorators.js.map