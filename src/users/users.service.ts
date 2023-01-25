import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model } from 'mongoose';
import { UserSchema, Users } from './shema/user.schema';

@Injectable()
export class UsersService {

    constructor (@InjectModel('User') private readonly userModel: Model<Users>) {}
  
   
  async findAll(): Promise<Users[]> {
    return this.userModel.find();
  }

  /*create(createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }*/
}
