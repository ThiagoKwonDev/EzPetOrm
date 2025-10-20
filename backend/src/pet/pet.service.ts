import { Injectable } from '@nestjs/common';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PetService {
  constructor(private readonly prismaService: PrismaService) {}
  create(createPetDto: CreatePetDto) {
    return this.prismaService.pet.create({ data: createPetDto });
  }

  findAll() {
    return this.prismaService.pet.findMany();
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    return await this.prismaService.pet.update({
      where: { id },
      data: updatePetDto,
    });
  }
}
