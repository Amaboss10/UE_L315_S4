import { InputType, Field, ObjectType, ID} from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firsname: string;
  @Field()
  lastname: string;
  @Field()
  email: string;
  @Field()
  createdAt: Date;
  @Field()
  updatedAt: Date;
}

@InputType()
export class FindUserInput {
    @Field()
    readonly _id: string;
}

@ObjectType()
export class CreateUserDto {
    @Field(() => ID)
    id: string;
    @Field()
    readonly firstname: string;
    @Field()
    readonly lastname: string;
    @Field()
    readonly email: string;
    @Field()
    readonly createdAt: Date;
    @Field()
    readonly updatedAt: Date;


}


