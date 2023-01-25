import { Document, Schema } from 'mongoose';

export interface Users extends Document {
    firstname: string,
    lastname: string,
    email: String
}

export const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String
});