import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ItemApprovalStatus } from '../item-approval-status/item-approval-status.entity';
import { Product } from '../product/product.entity';

@ObjectType()
export class RequestItem {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  productId: number;

  @Field(() => String)
  title: string;

  @Field(() => String, { nullable: true })
  description: string | null;

  @Field(() => String)
  requesterId: string;

  @Field(() => String)
  requesterName: string;

  @Field(() => Date, { nullable: true })
  updateTime: Date | null;

  @Field(() => ItemApprovalStatus, { nullable: true })
  itemApprovalStatus?: ItemApprovalStatus;

  @Field(() => Product)
  product?: Product;
}
