import { Injectable } from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ServicoService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createServicoDto: CreateServicoDto) {
    return this.prismaService.servico.create({ data: createServicoDto });
  }

  findAll() {
    return this.prismaService.servico.findMany();
  }

  async update(id: string, updateServicoDto: UpdateServicoDto) {
    return await this.prismaService.servico.update({
      where: { id },
      data: updateServicoDto,
    });
  }
}
