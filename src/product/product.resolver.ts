import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { ProductKeyTableService } from '../product-key-table/product-key-table.service';
import { BeolOptionService } from '../beol-option/beol-option.service';
import { ProcessplanService } from '../processplan/processplan.service';
import { ProductMetaService } from '../product-meta/product-meta.service';
import { RequestItemService } from '../request-item/request-item.service';
import { ProductKeyTable } from 'src/product-key-table/product-key-table.entity';
import { BeolOption } from 'src/beol-option/beol-option.entity';
import { Processplan } from 'src/processplan/processplan.entity';
import { ProductMeta } from 'src/product-meta/product-meta.entity';
import { RequestItem } from 'src/request-item/request-item.entity';

@Resolver(() => Product)
export class ProductResolver {
  constructor(
    private readonly productService: ProductService,
    private readonly productKeyTableService: ProductKeyTableService,
    private readonly beolOptionService: BeolOptionService,
    private readonly processplanService: ProcessplanService,
    private readonly productMetaService: ProductMetaService,
    private readonly requestItemService: RequestItemService,
  ) {}

  @Mutation(() => Product)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) {
    return this.productService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  findAll() {
    return this.productService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) {
    return this.productService.update(
      updateProductInput.id,
      updateProductInput,
    );
  }

  @Mutation(() => Product)
  removeProduct(@Args('id', { type: () => Int }) id: number) {
    return this.productService.remove(id);
  }

  @ResolveField(() => [ProductKeyTable], { nullable: true })
  productKeyTable(@Parent() product: Product) {
    return this.productKeyTableService.findByProductId(product.id);
  }

  @ResolveField(() => BeolOption, { nullable: true })
  beolOption(@Parent() product: Product) {
    return this.beolOptionService.findOne(product.beolOptionId);
  }

  @ResolveField(() => Processplan, { nullable: true })
  processplan(@Parent() product: Product) {
    return this.processplanService.findOne(product.processplanId);
  }

  @ResolveField(() => ProductMeta, { nullable: true })
  productMeta(@Parent() product: Product) {
    return this.productMetaService.findByProductId(product.id);
  }

  @ResolveField(() => [RequestItem], { nullable: true })
  requestItem(@Parent() product: Product) {
    return this.requestItemService.findByProductId(product.id);
  }
}
