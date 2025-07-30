import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { BeolOptionService } from './beol-option.service';
import { BeolOption } from './beol-option.entity';
import { CreateBeolOptionInput } from './dto/create-beol-option.input';
import { UpdateBeolOptionInput } from './dto/update-beol-option.input';
import { ProductKeyTableService } from '../product-key-table/product-key-table.service';
import { ProcessplanService } from '../processplan/processplan.service';
import { ProductService } from '../product/product.service';
import { ProductKeyTable } from 'src/product-key-table/product-key-table.entity';
import { Processplan } from 'src/processplan/processplan.entity';
import { Product } from 'src/product/product.entity';

@Resolver(() => BeolOption)
export class BeolOptionResolver {
  constructor(
    private readonly beolOptionService: BeolOptionService,
    private readonly productKeyTableService: ProductKeyTableService,
    private readonly processplanService: ProcessplanService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => BeolOption)
  createBeolOption(
    @Args('createBeolOptionInput') createBeolOptionInput: CreateBeolOptionInput,
  ) {
    return this.beolOptionService.create(createBeolOptionInput);
  }

  @Query(() => [BeolOption], { name: 'beolOptions' })
  findAll() {
    return this.beolOptionService.findAll();
  }

  @Query(() => BeolOption, { name: 'beolOption' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.beolOptionService.findOne(id);
  }

  @Query(() => [BeolOption], { name: 'beolOptionsByProcessplanId' })
  beolOptionsByProcessplanId(@Args('processplanId', { type: () => Int }) processplanId: number) {
    return this.beolOptionService.findByProcessplanId(processplanId);
  }

  @Mutation(() => BeolOption)
  updateBeolOption(
    @Args('updateBeolOptionInput') updateBeolOptionInput: UpdateBeolOptionInput,
  ) {
    return this.beolOptionService.update(
      updateBeolOptionInput.id,
      updateBeolOptionInput,
    );
  }

  @Mutation(() => BeolOption)
  removeBeolOption(@Args('id', { type: () => Int }) id: number) {
    return this.beolOptionService.remove(id);
  }

  @ResolveField(() => [ProductKeyTable], { nullable: true })
  productKeyTable(@Parent() beolOption: BeolOption) {
    return this.productKeyTableService.findByBeolOptionId(beolOption.id);
  }

  @ResolveField(() => Processplan, { nullable: true })
  processplan(@Parent() beolOption: BeolOption) {
    return this.processplanService.findOne(beolOption.processplanId);
  }

  @ResolveField(() => [Product], { nullable: true })
  product(@Parent() beolOption: BeolOption) {
    return this.productService.findByBeolOptionId(beolOption.id);
  }
}
