import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { ProcessplanService } from './processplan.service';
import { Processplan } from './processplan.entity';
import { CreateProcessplanInput } from './dto/create-processplan.input';
import { UpdateProcessplanInput } from './dto/update-processplan.input';
import { KeyInfoTableService } from '../key-info-table/key-info-table.service';
import { ProductKeyTableService } from '../product-key-table/product-key-table.service';
import { BeolOptionService } from '../beol-option/beol-option.service';
import { ProductService } from '../product/product.service';
import { KeyInfoTable } from 'src/key-info-table/key-info-table.entity';
import { ProductKeyTable } from 'src/product-key-table/product-key-table.entity';
import { BeolOption } from 'src/beol-option/beol-option.entity';
import { Product } from 'src/product/product.entity';

@Resolver(() => Processplan)
export class ProcessplanResolver {
  constructor(
    private readonly processplanService: ProcessplanService,
    private readonly keyInfoTableService: KeyInfoTableService,
    private readonly productKeyTableService: ProductKeyTableService,
    private readonly beolOptionService: BeolOptionService,
    private readonly productService: ProductService,
  ) {}

  @Mutation(() => Processplan)
  createProcessplan(
    @Args('createProcessplanInput') createProcessplanInput: CreateProcessplanInput,
  ) {
    return this.processplanService.create(createProcessplanInput);
  }

  @Query(() => [Processplan], { name: 'processplans' })
  findAll() {
    return this.processplanService.findAll();
  }

  @Query(() => Processplan, { name: 'processplan' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.processplanService.findOne(id);
  }

  @Mutation(() => Processplan)
  updateProcessplan(
    @Args('updateProcessplanInput') updateProcessplanInput: UpdateProcessplanInput,
  ) {
    return this.processplanService.update(
      updateProcessplanInput.id,
      updateProcessplanInput,
    );
  }

  @Mutation(() => Processplan)
  removeProcessplan(@Args('id', { type: () => Int }) id: number) {
    return this.processplanService.remove(id);
  }

  @ResolveField(() => [KeyInfoTable], { nullable: true })
  keyInfoTable(@Parent() processplan: Processplan) {
    return this.keyInfoTableService.findByProcessplanId(processplan.id);
  }

  @ResolveField(() => [ProductKeyTable], { nullable: true })
  productKeyTable(@Parent() processplan: Processplan) {
    return this.productKeyTableService.findByProcessplanId(processplan.id);
  }

  @ResolveField(() => [BeolOption], { nullable: true })
  beolOption(@Parent() processplan: Processplan) {
    return this.beolOptionService.findByProcessplanId(processplan.id);
  }

  @ResolveField(() => [Product], { nullable: true })
  product(@Parent() processplan: Processplan) {
    return this.productService.findByProcessplanId(processplan.id);
  }
}
