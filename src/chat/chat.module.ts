import { MessagesController } from './messages.controller';
import { MessagesGateway } from './messages.gateway';
import { MessagesService } from './messages.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesGateway],
})
export class ChatModule {}
