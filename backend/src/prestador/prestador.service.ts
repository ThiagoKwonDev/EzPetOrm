import { Injectable } from '@nestjs/common';
import { CreatePrestadorDto } from './dto/create-prestador.dto';
import { UpdatePrestadorDto } from './dto/update-prestador.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PrestadorService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPrestadorDto: CreatePrestadorDto) {
    return this.prismaService.prestador.create({ data: createPrestadorDto });
  }

  findAll() {
    return this.prismaService.prestador.findMany();
  }

  async update(id: string, updatePrestadorDto: UpdatePrestadorDto) {
    return await this.prismaService.prestador.update({
      where: { id },
      data: updatePrestadorDto,
    });
  }
}
