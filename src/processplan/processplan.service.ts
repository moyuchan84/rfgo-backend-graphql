import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProcessplanInput } from './dto/create-processplan.input';
import { UpdateProcessplanInput } from './dto/update-processplan.input';

@Injectable()
export class ProcessplanService {
  constructor(private prisma: PrismaService) {}

  create(createProcessplanInput: CreateProcessplanInput) {
    return this.prisma.processplan.create({ data: createProcessplanInput });
  }

  findAll() {
    return this.prisma.processplan.findMany();
  }

  findOne(id: number) {
    return this.prisma.processplan.findUnique({ where: { id } });
  }

  update(id: number, updateProcessplanInput: UpdateProcessplanInput) {
    return this.prisma.processplan.update({
      where: { id },
      data: updateProcessplanInput,
    });
  }

  remove(id: number) {
    return this.prisma.processplan.delete({ where: { id } });
  }
}
