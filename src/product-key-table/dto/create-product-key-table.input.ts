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
  keyTableName: string;

  @Field(() => [String])
  originalHeader: string[];

  @Field(() => [String])
  metaInfoList: string[];

  @Field(() => [GraphQLJSON])
  keyTableJson: any[];

  @Field(() => Int)
  revNo: number;
}
