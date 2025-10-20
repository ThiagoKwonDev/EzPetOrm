import { IsString, IsDecimal } from 'class-validator';
export class CreateServicoDto {
  @IsString()
  descricao: string;

  @IsString()
  titulo: string;

  @IsDecimal()
  preco: string;
}
