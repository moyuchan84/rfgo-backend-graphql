import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateProcessplanInput {
  @Field(() => String)
  designRule: string;
}
