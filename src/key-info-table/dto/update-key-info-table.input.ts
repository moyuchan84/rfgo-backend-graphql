import { CreateKeyInfoTableInput } from "./create-key-info-table.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";

@InputType()
export class UpdateKeyInfoTableInput extends PartialType(
  CreateKeyInfoTableInput
) {
  @Field(() => Int)
  id: number;
}
