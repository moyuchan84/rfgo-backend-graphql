import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateItemApprovalStatusInput } from "./dto/create-item-approval-status.input";
import { UpdateItemApprovalStatusInput } from "./dto/update-item-approval-status.input";
import { ItemApprovalStatus } from "./item-approval-status.entity";

@Injectable()
export class ItemApprovalStatusService {
  constructor(private prisma: PrismaService) {}

  private toItemApprovalStatusEntity(
    itemApprovalStatus: any
  ): ItemApprovalStatus {
    return {
      id: itemApprovalStatus.id,
      requestItemId: itemApprovalStatus.request_item_id,
      requestApproval: itemApprovalStatus.request_approval,
      requestApprovalUpdateTime:
        itemApprovalStatus.request_approval_update_time,
    };
  }

  create(createItemApprovalStatusInput: CreateItemApprovalStatusInput) {
    const { requestItemId, requestApproval } = createItemApprovalStatusInput;
    return this.prisma.item_approval_status.create({
      data: {
        request_item_id: requestItemId,
        request_approval: requestApproval,
      },
    });
  }

  async findAll(): Promise<ItemApprovalStatus[]> {
    const itemApprovalStatuses =
      await this.prisma.item_approval_status.findMany();
    return itemApprovalStatuses.map(this.toItemApprovalStatusEntity);
  }

  async findOne(id: number): Promise<ItemApprovalStatus> {
    const itemApprovalStatus =
      await this.prisma.item_approval_status.findUnique({ where: { id } });
    return this.toItemApprovalStatusEntity(itemApprovalStatus);
  }

  update(
    id: number,
    updateItemApprovalStatusInput: UpdateItemApprovalStatusInput
  ) {
    const { requestItemId, requestApproval } = updateItemApprovalStatusInput;
    return this.prisma.item_approval_status.update({
      where: { id },
      data: {
        request_item_id: requestItemId,
        request_approval: requestApproval,
      },
    });
  }

  remove(id: number) {
    return this.prisma.item_approval_status.delete({ where: { id } });
  }

  findByRequestItemId(requestItemId: number) {
    return this.prisma.item_approval_status.findUnique({
      where: { request_item_id: requestItemId },
    });
  }
}
