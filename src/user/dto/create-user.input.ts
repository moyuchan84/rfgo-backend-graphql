import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsEmail()
  email: string;

  @Field({ nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;
}
