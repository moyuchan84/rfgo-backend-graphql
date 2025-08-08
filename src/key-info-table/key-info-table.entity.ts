import { ObjectType, Field, Int } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { Processplan } from "../processplan/processplan.entity";

@ObjectType()
export class KeyInfoTable {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  infoTableName: string;

  @Field(() => [String])
  originalHeader: string[];

  @Field(() => [GraphQLJSON])
  infoTableJson: any[];

  @Field(() => Int)
  revNo: number;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => Processplan)
  processplan?: Processplan;
}
