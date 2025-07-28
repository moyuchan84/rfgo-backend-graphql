import { CreateRequestItemInput } from './create-request-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRequestItemInput extends PartialType(CreateRequestItemInput) {
  @Field(() => Int)
  id: number;
}
