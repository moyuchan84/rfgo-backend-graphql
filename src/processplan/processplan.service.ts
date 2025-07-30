import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProcessplanInput } from './dto/create-processplan.input';
import { UpdateProcessplanInput } from './dto/update-processplan.input';
import { Processplan } from './processplan.entity';

@Injectable()
export class ProcessplanService {
  constructor(private prisma: PrismaService) {}

  private toProcessplanEntity(processplan: any): Processplan {
    return {
      id: processplan.id,
      designRule: processplan.design_rule,
      updateTime: processplan.update_time,
    };
  }

  create(createProcessplanInput: CreateProcessplanInput) {
    const {designRule} = createProcessplanInput;
    return this.prisma.processplan.create({ data: {design_rule : designRule} });
  }

  async findAll(): Promise<Processplan[]> {
    const processplans = await this.prisma.processplan.findMany();
    return processplans.map(this.toProcessplanEntity);
  }

  async findOne(id: number): Promise<Processplan> {
    const processplan = await this.prisma.processplan.findUnique({ where: { id } });
    return this.toProcessplanEntity(processplan);
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
