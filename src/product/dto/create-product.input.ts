import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field(() => Int)
  beolOptionId: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  partId: string;

  @Field(() => String)
  productName: string;
}
