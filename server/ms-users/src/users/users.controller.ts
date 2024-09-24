import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
  } from '@nestjs/common';
  import { UsersService } from './users.service';
  import { CreateUserDto } from './dto/create-user.dto';
  import { UpdateUserDto } from './dto/update-user.dto';
  import { LoginUserDto } from './dto/login-user.dto';
  
  @Controller('users')
  export class UsersController {
    constructor(private readonly usersService: UsersService) { }
  
    @Post('register')
    create(@Body() createUserDto: CreateUserDto) {
      return this.usersService.register(createUserDto);
    }

    @Post('login')
    login(@Body() loginUserDto: LoginUserDto) {
      return this.usersService.login(loginUserDto);
    }

    @Patch(':id/profile')
    updateProfile(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
      return this.usersService.updateProfile(+id, updateUserDto);
    }
  
    @Get()
    findAll() {
      return this.usersService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.usersService.findOne(+id);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.usersService.remove(+id);
    }
  }