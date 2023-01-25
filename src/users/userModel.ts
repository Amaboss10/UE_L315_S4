import { model } from 'mongoose'
import { UserSchema } from './shema/user.schema';

export const UserModel = model('User', UserSchema);
