import { Module } from "@nestjs/common";
import { ProcessplanService } from "./processplan.service";
import { ProcessplanResolver } from "./processplan.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { KeyInfoTableService } from "../key-info-table/key-info-table.service";
import { ProductKeyTableService } from "../product-key-table/product-key-table.service";
import { BeolOptionService } from "../beol-option/beol-option.service";
import { ProductService } from "../product/product.service";

@Module({
  imports: [PrismaModule],
  providers: [
    ProcessplanResolver,
    ProcessplanService,
    KeyInfoTableService,
    ProductKeyTableService,
    BeolOptionService,
    ProductService,
  ],
  exports: [ProcessplanService],
})
export class ProcessplanModule {}
