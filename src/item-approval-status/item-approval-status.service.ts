import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateItemApprovalStatusInput } from './dto/create-item-approval-status.input';
import { UpdateItemApprovalStatusInput } from './dto/update-item-approval-status.input';

@Injectable()
export class ItemApprovalStatusService {
  constructor(private prisma: PrismaService) {}

  create(createItemApprovalStatusInput: CreateItemApprovalStatusInput) {
    return this.prisma.item_approval_status.create({ data: createItemApprovalStatusInput });
  }

  findAll() {
    return this.prisma.item_approval_status.findMany();
  }

  findOne(id: number) {
    return this.prisma.item_approval_status.findUnique({ where: { id } });
  }

  update(id: number, updateItemApprovalStatusInput: UpdateItemApprovalStatusInput) {
    return this.prisma.item_approval_status.update({
      where: { id },
      data: updateItemApprovalStatusInput,
    });
  }

  remove(id: number) {
    return this.prisma.item_approval_status.delete({ where: { id } });
  }

  findByRequestItemId(requestItemId: number) {
    return this.prisma.item_approval_status.findUnique({ where: { request_item_id: requestItemId } });
  }
}
