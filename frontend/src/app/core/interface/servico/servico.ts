import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BotaoVoltar } from '../../shared/botao-voltar/botao-voltar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { ModalServico } from './modal-servico/modal-servico';
import { ServicoService } from '../../service/servico-service';
import { ServicoDto } from '../../dto/servico.dto';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-servico',
  imports: [MatIconModule, MatButtonModule, BotaoVoltar, MatTableModule],
  templateUrl: './servico.html',
  styleUrl: './servico.scss',
})
export class Servico implements OnInit {
  listaServicos: ServicoDto[] = [];
  displayedColumns: string[] = ['id', 'titulo', 'descricao', 'preco', 'acoes'];
  constructor(
    private dialog: MatDialog,
    private servicoService: ServicoService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.buscarServico();
  }

  abrirModal(event: any) {
    const dialogRef = this.dialog.open(ModalServico, {
      width: '1000px',
      data: { servico: event },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.buscarServico();
      }
    });
  }

  buscarServico() {
    this.servicoService.findAll().subscribe((res) => {
      this.listaServicos = res.body;
      this.cdr.detectChanges();
    });
  }
}
