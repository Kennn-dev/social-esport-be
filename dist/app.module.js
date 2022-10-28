"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const comment_module_1 = require("./modules/comment/comment.module");
const apollo_1 = require("@nestjs/apollo");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const apollo_server_core_1 = require("apollo-server-core");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./modules/auth/auth.module");
const auth_service_1 = require("./modules/auth/auth.service");
const facebook_strategy_1 = require("./modules/auth/facebook.strategy");
const google_strategy_1 = require("./modules/auth/google.strategy");
const category_module_1 = require("./modules/category/category.module");
const category_service_1 = require("./modules/category/category.service");
const cloudinary_module_1 = require("./modules/cloudinary/cloudinary.module");
const cloudinary_service_1 = require("./modules/cloudinary/cloudinary.service");
const follow_module_1 = require("./modules/follow/follow.module");
const follow_service_1 = require("./modules/follow/follow.service");
const posts_module_1 = require("./modules/posts/posts.module");
const users_module_1 = require("./modules/user/users.module");
const users_service_1 = require("./modules/user/users.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URL),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                debug: true,
                playground: false,
                autoSchemaFile: 'schema.gql',
                context: ({ req, res }) => ({ req, res }),
                plugins: [(0, apollo_server_core_1.ApolloServerPluginLandingPageLocalDefault)()],
            }),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '10h' },
            }),
            users_module_1.UserModule,
            auth_module_1.AuthModule,
            category_module_1.CategoryModule,
            cloudinary_module_1.CloudinaryModule,
            follow_module_1.FollowModule,
            posts_module_1.PostsModule,
            comment_module_1.CommentModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            facebook_strategy_1.FacebookStrategy,
            google_strategy_1.GoogleStrategy,
            auth_service_1.AuthService,
            users_service_1.UserService,
            cloudinary_service_1.CloudinaryService,
            follow_service_1.FollowService,
            category_service_1.CategoryService,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map