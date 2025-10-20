import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPrestador } from './modal-prestador/modal-prestador';
import { BotaoVoltar } from '../../shared/botao-voltar/botao-voltar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { PrestadorDto } from '../../dto/prestador.dto';
import { PrestadorService } from '../../service/prestador-service';

@Component({
  selector: 'app-prestador',
  imports: [BotaoVoltar, MatButtonModule, MatIconModule, MatTableModule],
  templateUrl: './prestador.html',
  styleUrl: './prestador.scss',
})
export class Prestador implements OnInit {
  displayedColumns: string[] = [
    'id',
    'nome',
    'email',
    'telefone',
    'endereco',
    'acoes',
  ];
  listaPrestadores: PrestadorDto[] = [];
  constructor(
    private dialog: MatDialog,
    private prestadorService: PrestadorService,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.buscarPrestador();
  }

  abrirModal(event: any) {
    const dialogRef = this.dialog.open(ModalPrestador, {
      width: '1000px',
      data: { prestador: event },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.buscarPrestador();
      }
    });
  }

  buscarPrestador() {
    this.prestadorService.findAll().subscribe((res) => {
      this.listaPrestadores = res.body;
      this.cdr.detectChanges();
    });
  }
}
