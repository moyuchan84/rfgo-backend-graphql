import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductKeyTableInput } from './dto/create-product-key-table.input';
import { UpdateProductKeyTableInput } from './dto/update-product-key-table.input';

@Injectable()
export class ProductKeyTableService {
  constructor(private prisma: PrismaService) {}

  create(createProductKeyTableInput: CreateProductKeyTableInput) {
    return this.prisma.product_key_table.create({ data: createProductKeyTableInput });
  }

  findAll() {
    return this.prisma.product_key_table.findMany();
  }

  findOne(id: number) {
    return this.prisma.product_key_table.findUnique({ where: { id } });
  }

  update(id: number, updateProductKeyTableInput: UpdateProductKeyTableInput) {
    return this.prisma.product_key_table.update({
      where: { id },
      data: updateProductKeyTableInput,
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
