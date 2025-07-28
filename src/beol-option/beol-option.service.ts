import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeolOptionInput } from './dto/create-beol-option.input';
import { UpdateBeolOptionInput } from './dto/update-beol-option.input';

@Injectable()
export class BeolOptionService {
  constructor(private prisma: PrismaService) {}

  create(createBeolOptionInput: CreateBeolOptionInput) {
    const { processplanId, optionName } = createBeolOptionInput;
    return this.prisma.beol_option.create({
      data: {
        processplan_id: processplanId,
        option_name: optionName,
      },
    });
  }

  findAll() {
    return this.prisma.beol_option.findMany();
  }

  findOne(id: number) {
    return this.prisma.beol_option.findUnique({ where: { id } });
  }

  update(id: number, updateBeolOptionInput: UpdateBeolOptionInput) {
    const { processplanId, optionName } = updateBeolOptionInput;
    return this.prisma.beol_option.update({
      where: { id },
      data: {
        processplan_id: processplanId,
        option_name: optionName,
      },
    });
  }

  remove(id: number) {
    return this.prisma.beol_option.delete({ where: { id } });
  }

  findByProcessplanId(processplanId: number) {
    return this.prisma.beol_option.findMany({ where: { processplan_id: processplanId } });
  }
}
