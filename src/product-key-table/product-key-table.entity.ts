import { ObjectType, Field, Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { BeolOption } from '../beol-option/beol-option.entity';
import { Processplan } from '../processplan/processplan.entity';
import { Product } from '../product/product.entity';

@ObjectType()
export class ProductKeyTable {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => Int)
  beolOptionId: number;

  @Field(() => Int)
  processplanId: number;

  @Field(() => String)
  keyTableName: string;

  @Field(() => [String])
  originalHeader: string[];

  @Field(() => [String])
  metaInfoList: string[];

  @Field(() => [GraphQLJSON])
  keyTableJson: any[];

  @Field(() => Int)
  revNo: number;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => BeolOption)
  beolOption?: BeolOption;

  @Field(() => Processplan)
  processplan?: Processplan;

  @Field(() => Product)
  product?: Product;
}
