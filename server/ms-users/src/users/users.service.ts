import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  
  async register(createUserDto: CreateUserDto) {
    const user = createUserDto;
    return this.userRepository.save(user);
  }

  async login(loginUserDto: LoginUserDto): Promise<User>{
    const {email, password} = loginUserDto;
    const userExisting = await this.userRepository.findOne({where: {email}})
    if (!userExisting) {
      throw new Error('No se encontro usuario');
    }
    if(userExisting.password !== password){
      throw new Error('Contraseña incorrecta');
    }
    return userExisting;
  }

  async updateProfile(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userExisting = await this.userRepository.findOneBy({ id });
    if (!userExisting) {
      throw new Error('No se encontro usuario');
    }
    return this.userRepository.save({ ...userExisting, ...updateUserDto });
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find({ where: { isActive: true } });
  }

  async findOne(id: number): Promise<User> {
    const userExisting = await this.userRepository.findOneBy({ id });
    if (!userExisting) {
      throw new Error('No se encontro usuario');
    }
    return userExisting;
  }

  async remove(id: number): Promise<User> {
    const userExisting = await this.userRepository.findOneBy({ id });
    if (!userExisting) {
      throw new Error('No se encontro usuario');
    }
    userExisting.isActive = false;
    return this.userRepository.save(userExisting);
  }
}