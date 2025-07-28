import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeyInfoTableInput } from './dto/create-key-info-table.input';
import { UpdateKeyInfoTableInput } from './dto/update-key-info-table.input';

@Injectable()
export class KeyInfoTableService {
  constructor(private prisma: PrismaService) {}

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

  findAll() {
    return this.prisma.key_info_table.findMany();
  }

  findOne(id: number) {
    return this.prisma.key_info_table.findUnique({ where: { id } });
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
