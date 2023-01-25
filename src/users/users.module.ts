import { UserModel } from './userModel';
import {  UserSchema } from './shema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'User', schema: UserSchema}]),
],
  providers: [UsersResolver, UsersService, {provide: 'UserModel', useValue: UserModel}],
  exports: [ UsersService, 'UserModel' ]
})
export class UsersModule {}
