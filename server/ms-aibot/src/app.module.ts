import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessageService } from './message/message.service';  // Importamos el servicio
import { MessageResolver } from './message/message.resolver';  // Importamos el resolver
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';  // Importa ApolloDriver

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,  // Especifica el driver de Apollo
      autoSchemaFile: 'schema.gql', // Genera automáticamente el esquema GraphQL
      playground: true,  // Habilita GraphQL Playground para pruebas
    }),
  ],
  providers: [MessageService, MessageResolver],
})
export class AppModule {}
