import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBeolOptionInput } from './dto/create-beol-option.input';
import { UpdateBeolOptionInput } from './dto/update-beol-option.input';
import { BeolOption } from './beol-option.entity';

@Injectable()
export class BeolOptionService {
  constructor(private prisma: PrismaService) {}

  private toBeolOptionEntity(beolOption: any): BeolOption {
    return {
      id: beolOption.id,
      processplanId: beolOption.processplan_id,
      optionName: beolOption.option_name,
      updateTime: beolOption.update_time,
    };
  }

  create(createBeolOptionInput: CreateBeolOptionInput) {
    const { processplanId, optionName } = createBeolOptionInput;
    return this.prisma.beol_option.create({
      data: {
        processplan_id: processplanId,
        option_name: optionName,
      },
    });
  }

  async findAll(): Promise<BeolOption[]> {
    const beolOptions = await this.prisma.beol_option.findMany();
    return beolOptions.map(this.toBeolOptionEntity);
  }

  async findOne(id: number): Promise<BeolOption> {
    const beolOption = await this.prisma.beol_option.findUnique({ where: { id } });
    return this.toBeolOptionEntity(beolOption);
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

  async findByProcessplanId(processplanId: number): Promise<BeolOption[]> {
    const beolOptions = await this.prisma.beol_option.findMany({ where: { processplan_id: processplanId } });
    return beolOptions.map(this.toBeolOptionEntity);
  }
}
