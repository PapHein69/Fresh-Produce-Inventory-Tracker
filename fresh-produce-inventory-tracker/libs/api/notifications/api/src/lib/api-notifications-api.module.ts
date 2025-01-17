import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { NotificationController } from './notifications.controller';
import {NotificaytionService} from '../../../service/src/lib/notification.service';

@Module({
  imports:[MailerModule.forRoot({
    transport:{
      host:'smtp.sendgrid.net',
      auth:{
        user:'apikey',
        pass:''
      }
    }
  })],
  controllers: [NotificationController], 
  providers: [NotificaytionService],
  exports: [],
})
export class ApiNotificationsApiModule {}
