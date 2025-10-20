import { IsInt, IsString } from 'class-validator';

export class CreatePetDto {
  @IsString()
  tutor: string;

  @IsString()
  nome: string;

  @IsString()
  especie: string;

  @IsString()
  raca: string;

  @IsInt()
  idade: number;

  @IsString()
  restricoes: string;
}
