import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateKeyInfoTableInput {
  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  infoTableName: string;

  @Field(() => [String])
  originalHeaders: string[];

  @Field(() => [GraphQLJSON])
  infoTableRows: any[];

  @Field(() => Int)
  revNo: number;
}
