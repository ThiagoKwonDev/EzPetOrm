import { Component } from '@angular/core';
import { BotaoVoltar } from '../../shared/botao-voltar/botao-voltar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalServico } from './modal-servico/modal-servico';

@Component({
  selector: 'app-servico',
  imports: [MatIconModule, MatButtonModule, BotaoVoltar],
  templateUrl: './servico.html',
  styleUrl: './servico.scss',
})
export class Servico {
  constructor(private dialog: MatDialog) {}
  abrirModal(event: any) {
    const dialogRef = this.dialog.open(ModalServico, {
      width: '1000px',
      data: { pet: event },
    });
    dialogRef.afterClosed().subscribe((res) => {
      // if (res) {
      //   this.consultarEquipe();
      // }
    });
  }
}
