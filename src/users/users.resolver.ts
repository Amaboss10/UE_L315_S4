import { Users, UserSchema } from './shema/user.schema';
import { Resolver, Query, Mutation, Args, Int, InputType } from '@nestjs/graphql';
import { UsersService } from './users.service';
//import { User } from './entities/user.entity';
import { CreateUserInput, CreateUserDto, FindUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => CreateUserDto)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  

  @Query(() => [CreateUserDto], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => [CreateUserDto])
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.createUser(createUserInput);
  }

  @Query(() => [CreateUserDto], { name: 'user' })
  findOne(@Args('Input') input: FindUserInput) {
    return this.usersService.findOne(input);
  }

  @Mutation(() => [CreateUserDto])
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.updateUser(updateUserInput);
  }

  @Mutation(() => [CreateUserDto])
  async removeUser(@Args('Input') input: FindUserInput): Promise<any> {
    await this.usersService.removeUser(input._id);
    return 'User removed.'
  }
}
