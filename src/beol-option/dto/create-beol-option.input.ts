import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateBeolOptionInput {
  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  optionName: string;
}
