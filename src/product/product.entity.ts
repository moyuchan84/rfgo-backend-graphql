import { ObjectType, Field, Int } from "@nestjs/graphql";
import { ProductKeyTable } from "../product-key-table/product-key-table.entity";
import { BeolOption } from "../beol-option/beol-option.entity";
import { Processplan } from "../processplan/processplan.entity";
import { ProductMeta } from "../product-meta/product-meta.entity";
import { RequestItem } from "../request-item/request-item.entity";

@ObjectType()
export class Product {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  beolOptionId: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  partId: string;

  @Field(() => String)
  productName: string;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => [ProductKeyTable], { nullable: true })
  productKeyTable?: ProductKeyTable[];

  @Field(() => BeolOption)
  beolOption?: BeolOption;

  @Field(() => Processplan)
  processplan?: Processplan;

  @Field(() => ProductMeta, { nullable: true })
  productMeta?: ProductMeta;

  @Field(() => [RequestItem], { nullable: true })
  requestItem?: RequestItem[];
}
