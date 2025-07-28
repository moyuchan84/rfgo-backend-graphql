import { ObjectType, Field, Int } from '@nestjs/graphql';
import { KeyInfoTable } from '../key-info-table/key-info-table.entity';
import { ProductKeyTable } from '../product-key-table/product-key-table.entity';
import { BeolOption } from '../beol-option/beol-option.entity';
import { Product } from '../product/product.entity';

@ObjectType()
export class Processplan {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  designRule: string;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => [KeyInfoTable], { nullable: true })
  keyInfoTable?: KeyInfoTable[];

  @Field(() => [ProductKeyTable], { nullable: true })
  productKeyTable?: ProductKeyTable[];

  @Field(() => [BeolOption], { nullable: true })
  beolOption?: BeolOption[];

  @Field(() => [Product], { nullable: true })
  product?: Product[];
}
