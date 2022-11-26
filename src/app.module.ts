import { CommentModule } from '@modules/comment/comment.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { AuthService } from './modules/auth/auth.service';
import { FacebookStrategy } from './modules/auth/facebook.strategy';
import { GoogleStrategy } from './modules/auth/google.strategy';
import { CategoryModule } from './modules/category/category.module';
import { CategoryService } from './modules/category/category.service';
import { CloudinaryModule } from './modules/cloudinary/cloudinary.module';
import { CloudinaryService } from './modules/cloudinary/cloudinary.service';
import { FollowModule } from './modules/follow/follow.module';
import { FollowService } from './modules/follow/follow.service';
import { NotificationModule } from './modules/notification/notification.module';
import { NotificationService } from './modules/notification/notification.service';
import { PostsModule } from './modules/posts/posts.module';
import { UserModule } from './modules/user/users.module';
import { UserService } from './modules/user/users.service';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: false,
      autoSchemaFile: 'schema.gql',
      context: ({ req, res }) => ({ req, res }),
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // installSubscriptionHandlers: true,
      subscriptions: {
        'graphql-ws': true,
        'subscriptions-transport-ws': true,
      },
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '10h' },
    }),
    UserModule,
    AuthModule,
    CategoryModule,
    CloudinaryModule,
    FollowModule,
    PostsModule,
    CommentModule,
    NotificationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    FacebookStrategy,
    GoogleStrategy,
    AuthService,
    UserService,
    CloudinaryService,
    FollowService,
    CategoryService,
    NotificationService,
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
  ],
})
export class AppModule {}
