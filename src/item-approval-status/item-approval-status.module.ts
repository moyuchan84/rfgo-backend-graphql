import { Module } from '@nestjs/common';
import { ItemApprovalStatusService } from './item-approval-status.service';
import { ItemApprovalStatusResolver } from './item-approval-status.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { RequestItemService } from '../request-item/request-item.service';

@Module({
  imports: [PrismaModule],
  providers: [ItemApprovalStatusResolver, ItemApprovalStatusService, RequestItemService],
  exports: [ItemApprovalStatusService],
})
export class ItemApprovalStatusModule {}
