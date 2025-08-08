import { Module } from "@nestjs/common";
import { BeolOptionService } from "./beol-option.service";
import { BeolOptionResolver } from "./beol-option.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ProductKeyTableService } from "../product-key-table/product-key-table.service";
import { ProcessplanService } from "../processplan/processplan.service";
import { ProductService } from "../product/product.service";

@Module({
  imports: [PrismaModule],
  providers: [
    BeolOptionResolver,
    BeolOptionService,
    ProductKeyTableService,
    ProcessplanService,
    ProductService,
  ],
  exports: [BeolOptionService],
})
export class BeolOptionModule {}
