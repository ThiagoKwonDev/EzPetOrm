import { IsString } from 'class-validator';

export class CreatePrestadorDto {
  @IsString()
  nome: string;

  @IsString()
  email: string;

  @IsString()
  telefone: string;

  @IsString()
  endereco: string;

  @IsString()
  senha: string;
}
