
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProcessplanModule } from './processplan/processplan.module';
import { KeyInfoTableModule } from './key-info-table/key-info-table.module';
import { ProductKeyTableModule } from './product-key-table/product-key-table.module';
import { BeolOptionModule } from './beol-option/beol-option.module';
import { ProductModule } from './product/product.module';
import { ItemApprovalStatusModule } from './item-approval-status/item-approval-status.module';
import { ProductMetaModule } from './product-meta/product-meta.module';
import { RequestItemModule } from './request-item/request-item.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    UserModule,
    PrismaModule,
    ProcessplanModule,
    KeyInfoTableModule,
    ProductKeyTableModule,
    BeolOptionModule,
    ProductModule,
    ItemApprovalStatusModule,
    ProductMetaModule,
    RequestItemModule,
  ],
})
export class AppModule {}
