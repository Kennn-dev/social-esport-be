"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const common_1 = require("@nestjs/common");
function handleError(error) {
    console.error(error);
    if (typeof error === 'string')
        throw new common_1.HttpException(error, 500);
    if (error instanceof Error)
        throw new common_1.HttpException(error.message, 500);
}
exports.handleError = handleError;
//# sourceMappingURL=errors.js.map