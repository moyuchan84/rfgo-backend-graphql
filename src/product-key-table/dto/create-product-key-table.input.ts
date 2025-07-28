import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';

@InputType()
export class CreateProductKeyTableInput {
  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  beolOptionId: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  tableName: string;

  @Field(() => [String])
  originalHeaders: string[];

  @Field(() => [String])
  metaInfo: string[];

  @Field(() => [GraphQLJSON])
  tableRows: any[];

  @Field(() => Int)
  revNo: number;
}
