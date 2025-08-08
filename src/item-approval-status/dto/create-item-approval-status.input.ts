import { InputType, Field, Int } from "@nestjs/graphql";

@InputType()
export class CreateItemApprovalStatusInput {
  @Field(() => Int)
  requestItemId: number;

  @Field(() => String)
  requestApproval: string;
}
