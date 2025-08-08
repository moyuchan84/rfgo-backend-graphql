import { Module } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ProductResolver } from "./product.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ProductKeyTableService } from "../product-key-table/product-key-table.service";
import { BeolOptionService } from "../beol-option/beol-option.service";
import { ProcessplanService } from "../processplan/processplan.service";
import { ProductMetaService } from "../product-meta/product-meta.service";
import { RequestItemService } from "../request-item/request-item.service";

@Module({
  imports: [PrismaModule],
  providers: [
    ProductResolver,
    ProductService,
    ProductKeyTableService,
    BeolOptionService,
    ProcessplanService,
    ProductMetaService,
    RequestItemService,
  ],
  exports: [ProductService],
})
export class ProductModule {}
