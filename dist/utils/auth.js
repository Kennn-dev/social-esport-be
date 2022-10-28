"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestUtils = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const getRequestUtils = (context) => {
    var _a;
    const req = (_a = context.switchToHttp()) === null || _a === void 0 ? void 0 : _a.getRequest();
    if (req) {
        return req;
    }
    const gqlCtx = graphql_1.GqlExecutionContext.create(context).getContext();
    if (gqlCtx.req) {
        return gqlCtx.req;
    }
    throw new common_1.InternalServerErrorException('Unable to find JwtRequest from ExecutionContext');
};
exports.getRequestUtils = getRequestUtils;
//# sourceMappingURL=auth.js.map