import { CreateBeolOptionInput } from "./create-beol-option.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";

@InputType()
export class UpdateBeolOptionInput extends PartialType(CreateBeolOptionInput) {
  @Field(() => Int)
  id: number;
}
