import { ObjectType, Field, Int } from '@nestjs/graphql';
import { RequestItem } from '../request-item/request-item.entity';

@ObjectType()
export class ItemApprovalStatus {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  requestItemId: number;

  @Field(() => String)
  requestApproval: string;

  @Field(() => Date, { nullable: true })
  requestApprovalUpdateTime: Date | null;

  @Field(() => RequestItem)
  requestItem?: RequestItem;
}
