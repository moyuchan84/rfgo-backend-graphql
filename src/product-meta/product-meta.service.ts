import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProductMetaInput } from './dto/create-product-meta.input';
import { UpdateProductMetaInput } from './dto/update-product-meta.input';
import { ProductMeta } from './product-meta.entity';

@Injectable()
export class ProductMetaService {
  constructor(private prisma: PrismaService) {}

  private toProductMetaEntity(productMeta: any): ProductMeta {
    return {
      id: productMeta.id,
      productId: productMeta.product_id,
      processId: productMeta.process_id,
      mtoDate: productMeta.mto_date,
      customer: productMeta.customer,
      updateTime: productMeta.update_time,
    };
  }

  create(createProductMetaInput: CreateProductMetaInput) {
    const { productId, processId, mtoDate, customer } = createProductMetaInput;
    return this.prisma.product_meta.create({
      data: {
        product_id: productId,
        process_id: processId,
        mto_date: mtoDate,
        customer: customer,
      },
    });
  }

  async findAll(): Promise<ProductMeta[]> {
    const productMetas = await this.prisma.product_meta.findMany();
    return productMetas.map(this.toProductMetaEntity);
  }

  async findOne(id: number): Promise<ProductMeta> {
    const productMeta = await this.prisma.product_meta.findUnique({ where: { id } });
    return this.toProductMetaEntity(productMeta);
  }

  update(id: number, updateProductMetaInput: UpdateProductMetaInput) {
    const { productId, processId, mtoDate, customer } = updateProductMetaInput;
    return this.prisma.product_meta.update({
      where: { id },
      data: {
        product_id: productId,
        process_id: processId,
        mto_date: mtoDate,
        customer: customer,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product_meta.delete({ where: { id } });
  }

  findByProductId(productId: number) {
    return this.prisma.product_meta.findUnique({ where: { product_id: productId } });
  }
}
