import { Injectable, Type } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserInput, FindUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { Model, Types } from 'mongoose';
import { UserSchema, Users } from './shema/user.schema';

@Injectable()
export class UsersService {

    constructor (@InjectModel('User') private readonly userModel: Model<Users>) {}
  
   
  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async  createUser(createUserInput: CreateUserInput) : Promise<Users> {
    const user = new this.userModel(createUserInput);
    return user.save();
  }

  async findOne(user: FindUserInput ) : Promise<Users> {
    return this.userModel.findById(user._id);
  }

  async updateUser(updateUserInput: UpdateUserInput) : Promise<Users> {
    const user = await this.userModel.findOne(new Types.ObjectId(updateUserInput.id));
    return user.save();
  }

 async removeUser(_id: string) : Promise<any> {
    return await this.userModel.deleteOne({_id: new Types.ObjectId(_id)});
  }
}
