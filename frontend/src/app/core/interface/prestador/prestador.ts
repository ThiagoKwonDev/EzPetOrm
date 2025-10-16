import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPrestador } from './modal-prestador/modal-prestador';
import { BotaoVoltar } from '../../shared/botao-voltar/botao-voltar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-prestador',
  imports: [BotaoVoltar, MatButtonModule, MatIconModule],
  templateUrl: './prestador.html',
  styleUrl: './prestador.scss',
})
export class Prestador {
  constructor(private dialog: MatDialog) {}
  abrirModal(event: any) {
    const dialogRef = this.dialog.open(ModalPrestador, {
      width: '1000px',
      data: { tutor: event },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // if (res) {
      //   this.consultarEquipe();
      // }
    });
  }
}
