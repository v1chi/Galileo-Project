import { Resolver, Query, Args } from '@nestjs/graphql';
import { MessageService } from './message.service';

@Resolver()
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => String)
  async getChatbotResponse(@Args('message') message: string, @Args('sessionId') sessionId: string) {
    return this.messageService.processMessage(message, sessionId);
  }
}

export default MessageResolver;  // Exportación explícita
