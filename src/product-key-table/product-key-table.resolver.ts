import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProductKeyTableService } from './product-key-table.service';
import { ProductKeyTable } from './product-key-table.entity';
import { CreateProductKeyTableInput } from './dto/create-product-key-table.input';
import { UpdateProductKeyTableInput } from './dto/update-product-key-table.input';
import { BeolOptionService } from '../beol-option/beol-option.service';
import { ProcessplanService } from '../processplan/processplan.service';
import { ProductService } from '../product/product.service';

@Resolver(() => ProductKeyTable)
export class ProductKeyTableResolver {
  constructor(
    private readonly productKeyTableService: ProductKeyTableService,
    private readonly beolOptionService: BeolOptionService,
    private readonly processplanService: ProcessplanService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => ProductKeyTable)
  createProductKeyTable(
    @Args('createProductKeyTableInput')
    createProductKeyTableInput: CreateProductKeyTableInput,
  ) {
    return this.productKeyTableService.create(createProductKeyTableInput);
  }

  @Query(() => [ProductKeyTable], { name: 'productKeyTables' })
  findAll() {
    return this.productKeyTableService.findAll();
  }

  @Query(() => ProductKeyTable, { name: 'productKeyTable' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productKeyTableService.findOne(id);
  }

  @Mutation(() => ProductKeyTable)
  updateProductKeyTable(
    @Args('updateProductKeyTableInput')
    updateProductKeyTableInput: UpdateProductKeyTableInput,
  ) {
    return this.productKeyTableService.update(
      updateProductKeyTableInput.id,
      updateProductKeyTableInput,
    );
  }

  @Mutation(() => ProductKeyTable)
  removeProductKeyTable(@Args('id', { type: () => Int }) id: number) {
    return this.productKeyTableService.remove(id);
  }

  @ResolveField(() => BeolOption, { nullable: true })
  beolOption(@Parent() productKeyTable: ProductKeyTable) {
    return this.beolOptionService.findOne(productKeyTable.beolOptionId);
  }

  @ResolveField(() => Processplan, { nullable: true })
  processplan(@Parent() productKeyTable: ProductKeyTable) {
    return this.processplanService.findOne(productKeyTable.processplanId);
  }

  @ResolveField(() => Product, { nullable: true })
  product(@Parent() productKeyTable: ProductKeyTable) {
    return this.productService.findOne(productKeyTable.productId);
  }
}
