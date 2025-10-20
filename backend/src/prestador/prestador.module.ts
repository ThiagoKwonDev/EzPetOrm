import { Module } from '@nestjs/common';
import { PrestadorService } from './prestador.service';
import { PrestadorController } from './prestador.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PrestadorController],
  providers: [PrestadorService],
})
export class PrestadorModule {}
