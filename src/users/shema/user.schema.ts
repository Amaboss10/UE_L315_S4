
import { Document,Schema } from 'mongoose';
//import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export interface Users extends Document {
    firstname: string,
    lastname: string,
    email: String,
    createdAt: Date,
    updatedAt: Date
}
export const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    createdAt: Date,
    updatedAt: Date
});

/*
@Schema()
export class Users extends Document {
    @Prop()
    firsname: string;

    @Prop()
    lastname: string;

    @Prop()
    email: string;

    @Prop({required: true, default: () => new Date()})
    createdAt: Date;

    @Prop({required: false, default: null })
    updatedAt: Date;


}
export const UserSchema = SchemaFactory.createForClass(Users);
*/
