import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres', 
      password: 'postgres',  
      database: 'prueba_users',  
      entities: [User],
      synchronize: true,  
    }),
    UsersModule,  
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
