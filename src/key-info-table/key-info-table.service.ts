import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeyInfoTableInput } from './dto/create-key-info-table.input';
import { UpdateKeyInfoTableInput } from './dto/update-key-info-table.input';

@Injectable()
export class KeyInfoTableService {
  constructor(private prisma: PrismaService) {}

  create(createKeyInfoTableInput: CreateKeyInfoTableInput) {
    return this.prisma.key_info_table.create({ data: createKeyInfoTableInput });
  }

  findAll() {
    return this.prisma.key_info_table.findMany();
  }

  findOne(id: number) {
    return this.prisma.key_info_table.findUnique({ where: { id } });
  }

  update(id: number, updateKeyInfoTableInput: UpdateKeyInfoTableInput) {
    return this.prisma.key_info_table.update({
      where: { id },
      data: updateKeyInfoTableInput,
    });
  }

  remove(id: number) {
    return this.prisma.key_info_table.delete({ where: { id } });
  }

  findByProcessplanId(processplanId: number) {
    return this.prisma.key_info_table.findMany({ where: { processplan_id: processplanId } });
  }
}
