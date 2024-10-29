import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'getUserById' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  register(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.usersService.register(createUserDto);
  }

  @Query(() => User, { name: 'login' })
  login(@Args('loginUserDto') loginUserDto: LoginUserDto) {
    return this.usersService.login(loginUserDto);
  }

  @Mutation(() => User, { name: 'updateUserProfile' })
  updateProfile(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateUserDto') updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.updateProfile(id, updateUserDto);
  }
}
