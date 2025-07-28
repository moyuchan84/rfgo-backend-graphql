import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { RequestItemService } from './request-item.service';
import { RequestItem } from './request-item.entity';
import { CreateRequestItemInput } from './dto/create-request-item.input';
import { UpdateRequestItemInput } from './dto/update-request-item.input';
import { ItemApprovalStatusService } from '../item-approval-status/item-approval-status.service';
import { ProductService } from '../product/product.service';
import { ItemApprovalStatus } from 'src/item-approval-status/item-approval-status.entity';
import { Product } from 'src/product/product.entity';

@Resolver(() => RequestItem)
export class RequestItemResolver {
  constructor(
    private readonly requestItemService: RequestItemService,
    private readonly itemApprovalStatusService: ItemApprovalStatusService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => RequestItem)
  createRequestItem(
    @Args('createRequestItemInput') createRequestItemInput: CreateRequestItemInput,
  ) {
    return this.requestItemService.create(createRequestItemInput);
  }

  @Query(() => [RequestItem], { name: 'requestItems' })
  findAll() {
    return this.requestItemService.findAll();
  }

  @Query(() => RequestItem, { name: 'requestItem' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.requestItemService.findOne(id);
  }

  @Mutation(() => RequestItem)
  updateRequestItem(
    @Args('updateRequestItemInput') updateRequestItemInput: UpdateRequestItemInput,
  ) {
    return this.requestItemService.update(
      updateRequestItemInput.id,
      updateRequestItemInput,
    );
  }

  @Mutation(() => RequestItem)
  removeRequestItem(@Args('id', { type: () => Int }) id: number) {
    return this.requestItemService.remove(id);
  }

  @ResolveField(() => ItemApprovalStatus, { nullable: true })
  itemApprovalStatus(@Parent() requestItem: RequestItem) {
    return this.itemApprovalStatusService.findByRequestItemId(requestItem.id);
  }

  @ResolveField(() => Product, { nullable: true })
  product(@Parent() requestItem: RequestItem) {
    return this.productService.findOne(requestItem.productId);
  }
}
