import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProductMetaService } from './product-meta.service';
import { ProductMeta } from './product-meta.entity';
import { CreateProductMetaInput } from './dto/create-product-meta.input';
import { UpdateProductMetaInput } from './dto/update-product-meta.input';
import { ProductService } from '../product/product.service';

@Resolver(() => ProductMeta)
export class ProductMetaResolver {
  constructor(
    private readonly productMetaService: ProductMetaService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => ProductMeta)
  createProductMeta(
    @Args('createProductMetaInput') createProductMetaInput: CreateProductMetaInput,
  ) {
    return this.productMetaService.create(createProductMetaInput);
  }

  @Query(() => [ProductMeta], { name: 'productMetas' })
  findAll() {
    return this.productMetaService.findAll();
  }

  @Query(() => ProductMeta, { name: 'productMeta' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.productMetaService.findOne(id);
  }

  @Mutation(() => ProductMeta)
  updateProductMeta(
    @Args('updateProductMetaInput') updateProductMetaInput: UpdateProductMetaInput,
  ) {
    return this.productMetaService.update(
      updateProductMetaInput.id,
      updateProductMetaInput,
    );
  }

  @Mutation(() => ProductMeta)
  removeProductMeta(@Args('id', { type: () => Int }) id: number) {
    return this.productMetaService.remove(id);
  }

  @ResolveField(() => Product, { nullable: true })
  product(@Parent() productMeta: ProductMeta) {
    return this.productService.findOne(productMeta.productId);
  }
}
