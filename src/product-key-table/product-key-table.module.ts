import { Module } from '@nestjs/common';
import { ProductKeyTableService } from './product-key-table.service';
import { ProductKeyTableResolver } from './product-key-table.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { BeolOptionService } from '../beol-option/beol-option.service';
import { ProcessplanService } from '../processplan/processplan.service';
import { ProductService } from '../product/product.service';

@Module({
  imports: [PrismaModule],
  providers: [
    ProductKeyTableResolver,
    ProductKeyTableService,
    BeolOptionService,
    ProcessplanService,
    ProductService,
  ],
  exports: [ProductKeyTableService],
})
export class ProductKeyTableModule {}
