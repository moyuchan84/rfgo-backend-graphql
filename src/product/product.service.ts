import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    const { beolOptionId, processplanId, partId, productName } = createProductInput;
    return this.prisma.product.create({
      data: {
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        part_id: partId,
        product_name: productName,
      },
    });
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: number) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    const { beolOptionId, processplanId, partId, productName } = updateProductInput;
    return this.prisma.product.update({
      where: { id },
      data: {
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        part_id: partId,
        product_name: productName,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product.delete({ where: { id } });
  }

  findByBeolOptionId(beolOptionId: number) {
    return this.prisma.product.findMany({ where: { beol_option_id: beolOptionId } });
  }

  findByProcessplanId(processplanId: number) {
    return this.prisma.product.findMany({ where: { processplan_id: processplanId } });
  }
}
