import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TutorModule } from './tutor/tutor.module';
import { PrestadorModule } from './prestador/prestador.module';
import { PetModule } from './pet/pet.module';
import { ServicoModule } from './servico/servico.module';

@Module({
  imports: [TutorModule, PrestadorModule, PetModule, ServicoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
