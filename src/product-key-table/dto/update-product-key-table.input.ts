import { CreateProductKeyTableInput } from "./create-product-key-table.input";
import { InputType, Field, Int, PartialType } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";

@InputType()
export class UpdateProductKeyTableInput extends PartialType(
  CreateProductKeyTableInput
) {
  @Field(() => Int)
  id: number;
}
