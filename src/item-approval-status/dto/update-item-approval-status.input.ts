import { CreateItemApprovalStatusInput } from './create-item-approval-status.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateItemApprovalStatusInput extends PartialType(CreateItemApprovalStatusInput) {
  @Field(() => Int)
  id: number;
}
