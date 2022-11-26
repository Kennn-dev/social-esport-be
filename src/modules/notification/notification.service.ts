import { JWTPayload } from '@modules/auth/jwt.strategy';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { toObjectId } from 'src/utils';
import { CreateNotificationInput } from './dto/create.dto';
import {
  Notification,
  NotificationDocument,
} from './entities/notification.schema';

@Injectable()
export class NotificationService {
  constructor(
    // @Inject(forwardRef(() => Notification))
    // private notificationService: NotificationService ,
    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
  ) {}

  async getAllNotification() {
    return this.notificationModel.find();
  }

  async createNotification(input: CreateNotificationInput, user: JWTPayload) {
    const notiData = {
      ...input,
      // receiver: toObjectId((input.receiver)),
      receiver: toObjectId(user.userId), //hardcode
      sender: toObjectId(user.userId),
    };
    const noti = new this.notificationModel(notiData);
    return await noti.save();
  }
}
