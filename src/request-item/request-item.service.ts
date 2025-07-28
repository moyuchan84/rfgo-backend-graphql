import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRequestItemInput } from './dto/create-request-item.input';
import { UpdateRequestItemInput } from './dto/update-request-item.input';

@Injectable()
export class RequestItemService {
  constructor(private prisma: PrismaService) {}

  create(createRequestItemInput: CreateRequestItemInput) {
    return this.prisma.request_item.create({ data: createRequestItemInput });
  }

  findAll() {
    return this.prisma.request_item.findMany();
  }

  findOne(id: number) {
    return this.prisma.request_item.findUnique({ where: { id } });
  }

  update(id: number, updateRequestItemInput: UpdateRequestItemInput) {
    return this.prisma.request_item.update({
      where: { id },
      data: updateRequestItemInput,
    });
  }

  remove(id: number) {
    return this.prisma.request_item.delete({ where: { id } });
  }

  findByProductId(productId: number) {
    return this.prisma.request_item.findMany({ where: { product_id: productId } });
  }
}
