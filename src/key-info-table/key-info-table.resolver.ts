import { Resolver, Query, Mutation, Args, Int, ResolveField, Parent } from '@nestjs/graphql';
import { KeyInfoTableService } from './key-info-table.service';
import { KeyInfoTable } from './key-info-table.entity';
import { CreateKeyInfoTableInput } from './dto/create-key-info-table.input';
import { UpdateKeyInfoTableInput } from './dto/update-key-info-table.input';
import { ProcessplanService } from '../processplan/processplan.service';
import { Processplan } from 'src/processplan/processplan.entity';

@Resolver(() => KeyInfoTable)
export class KeyInfoTableResolver {
  constructor(
    private readonly keyInfoTableService: KeyInfoTableService,
    private readonly processplanService: ProcessplanService,
  ) {}

  @Mutation(() => KeyInfoTable)
  createKeyInfoTable(
    @Args('createKeyInfoTableInput') createKeyInfoTableInput: CreateKeyInfoTableInput,
  ) {
    return this.keyInfoTableService.create(createKeyInfoTableInput);
  }

  @Query(() => [KeyInfoTable], { name: 'keyInfoTables' })
  findAll() {
    return this.keyInfoTableService.findAll();
  }

  @Query(() => KeyInfoTable, { name: 'keyInfoTable' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.keyInfoTableService.findOne(id);
  }

  @Mutation(() => KeyInfoTable)
  updateKeyInfoTable(
    @Args('updateKeyInfoTableInput') updateKeyInfoTableInput: UpdateKeyInfoTableInput,
  ) {
    return this.keyInfoTableService.update(
      updateKeyInfoTableInput.id,
      updateKeyInfoTableInput,
    );
  }

  @Mutation(() => KeyInfoTable)
  removeKeyInfoTable(@Args('id', { type: () => Int }) id: number) {
    return this.keyInfoTableService.remove(id);
  }

  @ResolveField(() => Processplan, { nullable: true })
  processplan(@Parent() keyInfoTable: KeyInfoTable) {
    return this.processplanService.findOne(keyInfoTable.processplanId);
  }
}
