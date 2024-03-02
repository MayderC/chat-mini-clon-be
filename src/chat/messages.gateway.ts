import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway(81, {
  cors: {
    origin: '*',
  },
})
export class MessagesGateway {
  @SubscribeMessage('message')
  handleMessage(): string {
    return 'Hello world!';
  }
}
