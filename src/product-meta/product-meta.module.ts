import { Module } from "@nestjs/common";
import { ProductMetaService } from "./product-meta.service";
import { ProductMetaResolver } from "./product-meta.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ProductService } from "../product/product.service";

@Module({
  imports: [PrismaModule],
  providers: [ProductMetaResolver, ProductMetaService, ProductService],
  exports: [ProductMetaService],
})
export class ProductMetaModule {}
