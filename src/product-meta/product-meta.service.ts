import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductMetaInput } from './dto/create-product-meta.input';
import { UpdateProductMetaInput } from './dto/update-product-meta.input';

@Injectable()
export class ProductMetaService {
  constructor(private prisma: PrismaService) {}

  create(createProductMetaInput: CreateProductMetaInput) {
    return this.prisma.product_meta.create({ data: createProductMetaInput });
  }

  findAll() {
    return this.prisma.product_meta.findMany();
  }

  findOne(id: number) {
    return this.prisma.product_meta.findUnique({ where: { id } });
  }

  update(id: number, updateProductMetaInput: UpdateProductMetaInput) {
    return this.prisma.product_meta.update({
      where: { id },
      data: updateProductMetaInput,
    });
  }

  remove(id: number) {
    return this.prisma.product_meta.delete({ where: { id } });
  }

  findByProductId(productId: number) {
    return this.prisma.product_meta.findUnique({ where: { product_id: productId } });
  }
}
