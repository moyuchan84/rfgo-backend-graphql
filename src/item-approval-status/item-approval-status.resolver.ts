import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ItemApprovalStatusService } from './item-approval-status.service';
import { ItemApprovalStatus } from './item-approval-status.entity';
import { CreateItemApprovalStatusInput } from './dto/create-item-approval-status.input';
import { UpdateItemApprovalStatusInput } from './dto/update-item-approval-status.input';
import { RequestItemService } from '../request-item/request-item.service';
import { RequestItem } from 'src/request-item/request-item.entity';

@Resolver(() => ItemApprovalStatus)
export class ItemApprovalStatusResolver {
  constructor(
    private readonly itemApprovalStatusService: ItemApprovalStatusService,
    private readonly requestItemService: RequestItemService,
  ) {}

  @Mutation(() => ItemApprovalStatus)
  createItemApprovalStatus(
    @Args('createItemApprovalStatusInput')
    createItemApprovalStatusInput: CreateItemApprovalStatusInput,
  ) {
    return this.itemApprovalStatusService.create(createItemApprovalStatusInput);
  }

  @Query(() => [ItemApprovalStatus], { name: 'itemApprovalStatuses' })
  findAll() {
    return this.itemApprovalStatusService.findAll();
  }

  @Query(() => ItemApprovalStatus, { name: 'itemApprovalStatus' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.itemApprovalStatusService.findOne(id);
  }

  @Mutation(() => ItemApprovalStatus)
  updateItemApprovalStatus(
    @Args('updateItemApprovalStatusInput')
    updateItemApprovalStatusInput: UpdateItemApprovalStatusInput,
  ) {
    return this.itemApprovalStatusService.update(
      updateItemApprovalStatusInput.id,
      updateItemApprovalStatusInput,
    );
  }

  @Mutation(() => ItemApprovalStatus)
  removeItemApprovalStatus(@Args('id', { type: () => Int }) id: number) {
    return this.itemApprovalStatusService.remove(id);
  }

  @ResolveField(() => RequestItem, { nullable: true })
  requestItem(@Parent() itemApprovalStatus: ItemApprovalStatus) {
    return this.requestItemService.findOne(itemApprovalStatus.requestItemId);
  }
}
