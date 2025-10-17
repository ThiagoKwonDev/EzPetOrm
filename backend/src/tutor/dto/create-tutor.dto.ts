import { IsString } from 'class-validator';

export class CreateTutorDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  telefone: string;

  @IsString()
  senha: string;
}
