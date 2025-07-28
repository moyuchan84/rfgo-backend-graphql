import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateRequestItemInput {
  @Field(() => Int)
  productId: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String)
  requesterId: string;

  @Field(() => String)
  requesterName: string;
}
