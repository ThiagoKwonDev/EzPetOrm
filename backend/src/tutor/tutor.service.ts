import { Injectable } from '@nestjs/common';
import { CreateTutorDto } from './dto/create-tutor.dto';
import { UpdateTutorDto } from './dto/update-tutor.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TutorService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createTutorDto: CreateTutorDto) {
    return this.prismaService.tutor.create({ data: createTutorDto });
  }

  findAll() {
    return this.prismaService.tutor.findMany();
  }

  async update(id: string, updateTutorDto: UpdateTutorDto) {
    return await this.prismaService.tutor.update({
      where: { id },
      data: updateTutorDto,
    });
  }
}
