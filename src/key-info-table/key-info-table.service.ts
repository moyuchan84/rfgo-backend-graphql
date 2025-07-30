import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeyInfoTableInput } from './dto/create-key-info-table.input';
import { UpdateKeyInfoTableInput } from './dto/update-key-info-table.input';
import { KeyInfoTable } from './key-info-table.entity';

@Injectable()
export class KeyInfoTableService {
  constructor(private prisma: PrismaService) {}

  private toKeyInfoTableEntity(keyInfoTable: any): KeyInfoTable {
    return {
      id: keyInfoTable.id,
      processplanId: keyInfoTable.processplan_id,
      infoTableName: keyInfoTable.info_table_name,
      originalHeaders: keyInfoTable.original_headers,
      infoTableRows: keyInfoTable.info_table_rows,
      revNo: keyInfoTable.rev_no,
      updateTime: keyInfoTable.update_time,
    };
  }

  create(createKeyInfoTableInput: CreateKeyInfoTableInput) {
    const { processplanId, infoTableName, originalHeaders, infoTableRows, revNo } = createKeyInfoTableInput;
    return this.prisma.key_info_table.create({
      data: {
        processplan_id: processplanId,
        info_table_name: infoTableName,
        original_headers: originalHeaders,
        info_table_rows: infoTableRows,
        rev_no: revNo,
      },
    });
  }

  async findAll(): Promise<KeyInfoTable[]> {
    const keyInfoTables = await this.prisma.key_info_table.findMany();
    return keyInfoTables.map(this.toKeyInfoTableEntity);
  }

  async findOne(id: number): Promise<KeyInfoTable> {
    const keyInfoTable = await this.prisma.key_info_table.findUnique({ where: { id } });
    return this.toKeyInfoTableEntity(keyInfoTable);
  }

  update(id: number, updateKeyInfoTableInput: UpdateKeyInfoTableInput) {
    const { processplanId, infoTableName, originalHeaders, infoTableRows, revNo } = updateKeyInfoTableInput;
    return this.prisma.key_info_table.update({
      where: { id },
      data: {
        processplan_id: processplanId,
        info_table_name: infoTableName,
        original_headers: originalHeaders,
        info_table_rows: infoTableRows,
        rev_no: revNo,
      },
    });
  }

  remove(id: number) {
    return this.prisma.key_info_table.delete({ where: { id } });
  }

  findByProcessplanId(processplanId: number) {
    return this.prisma.key_info_table.findMany({ where: { processplan_id: processplanId } });
  }
}
