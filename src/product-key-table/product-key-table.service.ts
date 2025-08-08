import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateProductKeyTableInput } from "./dto/create-product-key-table.input";
import { UpdateProductKeyTableInput } from "./dto/update-product-key-table.input";
import { ProductKeyTable } from "./product-key-table.entity";

@Injectable()
export class ProductKeyTableService {
  constructor(private prisma: PrismaService) {}

  private toProductKeyTableEntity(productKeyTable: any): ProductKeyTable {
    return {
      id: productKeyTable.id,
      productId: productKeyTable.product_id,
      beolOptionId: productKeyTable.beol_option_id,
      processplanId: productKeyTable.processplan_id,
      keyTableName: productKeyTable.key_table_name,
      originalHeader: productKeyTable.original_header,
      metaInfoList: productKeyTable.meta_info_list,
      keyTableJson: productKeyTable.key_table_json,
      revNo: productKeyTable.rev_no,
      updateTime: productKeyTable.update_time,
    };
  }

  create(createProductKeyTableInput: CreateProductKeyTableInput) {
    const {
      productId,
      beolOptionId,
      processplanId,
      keyTableName,
      originalHeader,
      metaInfoList,
      keyTableJson,
      revNo,
    } = createProductKeyTableInput;
    return this.prisma.product_key_table.create({
      data: {
        product_id: productId,
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        key_table_name: keyTableName,
        original_header: originalHeader,
        meta_info_list: metaInfoList,
        key_table_json: keyTableJson,
        rev_no: revNo,
      },
    });
  }

  async findAll(): Promise<ProductKeyTable[]> {
    const productKeyTables = await this.prisma.product_key_table.findMany();
    return productKeyTables.map(this.toProductKeyTableEntity);
  }

  async findOne(id: number): Promise<ProductKeyTable> {
    const productKeyTable = await this.prisma.product_key_table.findUnique({
      where: { id },
    });
    return this.toProductKeyTableEntity(productKeyTable);
  }

  update(id: number, updateProductKeyTableInput: UpdateProductKeyTableInput) {
    const {
      productId,
      beolOptionId,
      processplanId,
      keyTableName,
      originalHeader,
      metaInfoList,
      keyTableJson,
      revNo,
    } = updateProductKeyTableInput;
    return this.prisma.product_key_table.update({
      where: { id },
      data: {
        product_id: productId,
        beol_option_id: beolOptionId,
        processplan_id: processplanId,
        key_table_name: keyTableName,
        original_header: originalHeader,
        meta_info_list: metaInfoList,
        key_table_json: keyTableJson,
        rev_no: revNo,
      },
    });
  }

  remove(id: number) {
    return this.prisma.product_key_table.delete({ where: { id } });
  }

  async findByProductId(productId: number): Promise<ProductKeyTable[]> {
    const productKeyTables = await this.prisma.product_key_table.findMany({
      where: { product_id: productId },
    });
    return productKeyTables.map(this.toProductKeyTableEntity);
  }

  async findByBeolOptionId(beolOptionId: number): Promise<ProductKeyTable[]> {
    const productKeyTables = await this.prisma.product_key_table.findMany({
      where: { beol_option_id: beolOptionId },
    });
    return productKeyTables.map(this.toProductKeyTableEntity);
  }

  async findByProcessplanId(processplanId: number): Promise<ProductKeyTable[]> {
    const productKeyTables = await this.prisma.product_key_table.findMany({
      where: { processplan_id: processplanId },
    });
    return productKeyTables.map(this.toProductKeyTableEntity);
  }
}
