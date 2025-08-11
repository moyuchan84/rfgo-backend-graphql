import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateRequestItemInput } from "./dto/create-request-item.input";
import { UpdateRequestItemInput } from "./dto/update-request-item.input";
import { RequestItem } from "./request-item.entity";

@Injectable()
export class RequestItemService {
  constructor(private prisma: PrismaService) {}

  private toRequestItemEntity(requestItem: any): RequestItem {
    return {
      id: requestItem.id,
      productId: requestItem.product_id,
      title: requestItem.title,
      description: requestItem.description,
      requesterId: requestItem.requester_id,
      requesterName: requestItem.requester_name,
      updateTime: requestItem.update_time,
      edmList: requestItem.edm_list,
    };
  }

  create(createRequestItemInput: CreateRequestItemInput) {
    const { productId, title, description, requesterId, requesterName } =
      createRequestItemInput;
    return this.prisma.request_item.create({
      data: {
        product_id: productId,
        title: title,
        description: description,
        requester_id: requesterId,
        requester_name: requesterName,
      },
    });
  }

  async findAll(): Promise<RequestItem[]> {
    const requestItems = await this.prisma.request_item.findMany();
    return requestItems.map(this.toRequestItemEntity);
  }

  async findOne(id: number): Promise<RequestItem> {
    const requestItem = await this.prisma.request_item.findUnique({
      where: { id },
    });
    return this.toRequestItemEntity(requestItem);
  }

  update(id: number, updateRequestItemInput: UpdateRequestItemInput) {
    const {
      productId,
      title,
      description,
      edmList,
      requesterId,
      requesterName,
    } = updateRequestItemInput;
    return this.prisma.request_item.update({
      where: { id },
      data: {
        product_id: productId,
        title: title,
        description: description,
        edm_list: edmList,
        requester_id: requesterId,
        requester_name: requesterName,
      },
    });
  }

  remove(id: number) {
    return this.prisma.request_item.delete({ where: { id } });
  }

  findByProductId(productId: number) {
    return this.prisma.request_item.findMany({
      where: { product_id: productId },
    });
  }

  async findAllByUpdateTimeRange(
    fromTime: Date,
    endTime: Date
  ): Promise<RequestItem[]> {
    const requestItems = await this.prisma.request_item.findMany({
      where: {
        update_time: {
          gte: fromTime,
          lte: endTime,
        },
      },
    });
    return requestItems.map(this.toRequestItemEntity);
  }
}
