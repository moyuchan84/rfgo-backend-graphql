import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Product } from "../product/product.entity";

@ObjectType()
export class ProductMeta {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => String)
  processId: string;

  @Field(() => Date)
  mtoDate: Date;

  @Field(() => String)
  customer: string;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => Product)
  product?: Product;
}
