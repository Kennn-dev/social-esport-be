import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { PUBLISH } from 'src/constants/pubsub';
import { CurrentUser } from 'src/decorators/auth.decorators';
import { JwtAuthGuard } from 'src/guards/jwt-auth.guard';
import { JWTPayload } from './../auth/jwt.strategy';
import { CreateNotificationInput } from './dto/create.dto';
import { NotificationDto } from './dto/notification.dto';
import { Notification } from './entities/notification.schema';
import { NotificationService } from './notification.service';

const pubSub = new PubSub();

@Resolver(() => Notification)
export class NotificationResolver {
  constructor(private readonly notificationService: NotificationService) {}

  @Mutation(() => NotificationDto, {
    name: 'createNotification',
  })
  @UseGuards(JwtAuthGuard)
  async createNotification(
    @Args('input') input: CreateNotificationInput,
    @CurrentUser() user: JWTPayload,
  ) {
    const noti = await this.notificationService.createNotification(input, user);

    pubSub.publish(PUBLISH.CREATE_NOTIFICATION, {
      newNotification: noti,
    });

    return noti;
  }

  @Query(() => [NotificationDto], { name: 'getAllNotification' })
  async getAllNotification() {
    return this.notificationService.getAllNotification();
  }

  @Subscription(() => NotificationDto, {
    name: 'newNotification',
    filter: (payload, variables) => {
      console.log('payload, variables', payload, variables);

      return payload.newNotification;
    },
  })
  notificationCreated() {
    // console.log('notificationCreated');
    const rs = pubSub.asyncIterator(PUBLISH.CREATE_NOTIFICATION);
    console.log(rs);

    return rs;
  }
}
