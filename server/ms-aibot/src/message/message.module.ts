import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';

@Module({
  providers: [MessageService, MessageResolver],
  exports: [MessageService],  // Exportamos el servicio para que pueda ser usado en otros módulos
})
export class MessageModule {}
