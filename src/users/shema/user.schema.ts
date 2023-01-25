import { Document, Schema } from 'mongoose';

export interface Users extends Document {
    firstname: string,
    lastname: string,
}

export const UserSchema = new Schema({
    firstname: String,
    lastname: String,
});