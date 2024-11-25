import { Resolver, Query, Args } from '@nestjs/graphql';
import { MessageService } from '../message/message.service'; // Verifica la ruta correcta

@Resolver()
export class UsersResolver {
  constructor(private readonly messageService: MessageService) {}

  @Query(() => String)
  async getChatbotResponse(
    @Args('message') message: string,
    @Args('sessionId') sessionId: string
  ) {
    // Llamada al método 'processMessage' del servicio MessageService
    return this.messageService.processMessage(message, sessionId);
  }
}
