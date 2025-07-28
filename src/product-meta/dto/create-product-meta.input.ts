import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductMetaInput {
  @Field(() => Int)
  productId: number;

  @Field(() => String)
  processId: string;

  @Field(() => Date)
  mtoDate: Date;

  @Field(() => String)
  customer: string;
}
