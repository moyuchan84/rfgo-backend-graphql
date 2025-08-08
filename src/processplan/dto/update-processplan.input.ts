import { CreateProcessplanInput } from "./create-processplan.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateProcessplanInput extends PartialType(
  CreateProcessplanInput
) {
  @Field(() => Int)
  id: number;
}
