import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductKeyTableInput } from './dto/create-product-key-table.input';
import { UpdateProductKeyTableInput } from './dto/update-product-key-table.input';

@Injectable()
export class ProductKeyTableService {
  constructor(private prisma: PrismaService) {}

  create(createProductKeyTableInput: CreateProductKeyTableInput) {
    const { productId, beolOptionId, processplanId, tableName, originalHeaders, metaInfo, tableRows, revNo } = createProductKeyTableInput;
    return this.prisma.product_key_table.create({
      data: {
        product_id: productId,
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        table_name: tableName,
        original_headers: originalHeaders,
        meta_info: metaInfo,
        table_rows: tableRows,
        rev_no: revNo,
      },
    });
  }

  findAll() {
    return this.prisma.product_key_table.findMany();
  }

  findOne(id: number) {
    return this.prisma.product_key_table.findUnique({ where: { id } });
  }

  update(id: number, updateProductKeyTableInput: UpdateProductKeyTableInput) {
    const { productId, beolOptionId, processplanId, tableName, originalHeaders, metaInfo, tableRows, revNo } = updateProductKeyTableInput;
    return this.prisma.product_key_table.update({
      where: { id },
      data: {
        product_id: productId,
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        table_name: tableName,
        original_headers: originalHeaders,
        meta_info: metaInfo,
        table_rows: tableRows,
        rev_no: revNo,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product_key_table.delete({ where: { id } });
  }

  findByProductId(productId: number) {
    return this.prisma.product_key_table.findMany({ where: { product_id: productId } });
  }

  findByBeolOptionId(beolOptionId: number) {
    return this.prisma.product_key_table.findMany({ where: { beol_option_id: beolOptionId } });
  }

  findByProcessplanId(processplanId: number) {
    return this.prisma.product_key_table.findMany({ where: { processplan_id: processplanId } });
  }
}
