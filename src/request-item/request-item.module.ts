import { Module } from '@nestjs/common';
import { RequestItemService } from './request-item.service';
import { RequestItemResolver } from './request-item.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { ItemApprovalStatusService } from '../item-approval-status/item-approval-status.service';
import { ProductService } from '../product/product.service';

@Module({
  imports: [PrismaModule],
  providers: [
    RequestItemResolver,
    RequestItemService,
    ItemApprovalStatusService,
    ProductService,
  ],
  exports: [RequestItemService],
})
export class RequestItemModule {}
