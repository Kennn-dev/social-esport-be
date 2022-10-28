"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
dotenv.config();
const PORT = process.env.PORT || 4000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(PORT);
    console.log(`
      Server run at port http://localhost:${PORT}/ 
      ***
      GraphQL http://localhost:${PORT}/graphql`);
}
bootstrap();
//# sourceMappingURL=main.js.map