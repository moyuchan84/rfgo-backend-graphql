import { Module } from "@nestjs/common";
import { KeyInfoTableService } from "./key-info-table.service";
import { KeyInfoTableResolver } from "./key-info-table.resolver";
import { PrismaModule } from "../prisma/prisma.module";
import { ProcessplanService } from "../processplan/processplan.service";

@Module({
  imports: [PrismaModule],
  providers: [KeyInfoTableResolver, KeyInfoTableService, ProcessplanService],
  exports: [KeyInfoTableService],
})
export class KeyInfoTableModule {}
