import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-botao-voltar',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './botao-voltar.html',
  styleUrl: './botao-voltar.scss',
})
export class BotaoVoltar {}
