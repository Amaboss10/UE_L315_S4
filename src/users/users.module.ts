import {  UserSchema } from './shema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Users', schema: UserSchema}])],
  providers: [UsersResolver, UsersService]
})
export class UsersModule {}
