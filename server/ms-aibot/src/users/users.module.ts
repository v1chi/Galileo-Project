import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { MessageService } from '../message/message.service';  // Asegúrate de importar el servicio

@Module({
  providers: [UsersResolver, MessageService],  // Aquí estás proporcionando el servicio
})
export class UsersModule {}
