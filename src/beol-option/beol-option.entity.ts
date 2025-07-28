import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProductKeyTable } from '../product-key-table/product-key-table.entity';
import { Processplan } from '../processplan/processplan.entity';
import { Product } from '../product/product.entity';

@ObjectType()
export class BeolOption {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  optionName: string;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => [ProductKeyTable], { nullable: true })
  productKeyTable?: ProductKeyTable[];

  @Field(() => Processplan)
  processplan?: Processplan;

  @Field(() => [Product], { nullable: true })
  product?: Product[];
}
