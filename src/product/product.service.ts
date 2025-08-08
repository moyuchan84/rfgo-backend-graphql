import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductInput } from "./dto/create-product.input";
import { UpdateProductInput } from "./dto/update-product.input";
import { Product } from "./product.entity";

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  private toProductEntity(product: any): Product {
    return {
      id: product.id,
      beolOptionId: product.beol_option_id,
      processplanId: product.processplan_id,
      partId: product.part_id,
      productName: product.product_name,
      updateTime: product.update_time,
    };
  }

  create(createProductInput: CreateProductInput) {
    const { beolOptionId, processplanId, partId, productName } =
      createProductInput;
    return this.prisma.product.create({
      data: {
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        part_id: partId,
        product_name: productName,
      },
    });
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products.map(this.toProductEntity);
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.prisma.product.findUnique({ where: { id } });
    return this.toProductEntity(product);
  }

  update(id: number, updateProductInput: UpdateProductInput) {
    const { beolOptionId, processplanId, partId, productName } =
      updateProductInput;
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

  async findByBeolOptionId(beolOptionId: number): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: { beol_option_id: beolOptionId },
    });
    return products.map(this.toProductEntity);
  }

  async findByProcessplanId(processplanId: number): Promise<Product[]> {
    const products = await this.prisma.product.findMany({
      where: { processplan_id: processplanId },
    });
    return products.map(this.toProductEntity);
  }
}
