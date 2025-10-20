import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPet } from './modal-pet/modal-pet';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BotaoVoltar } from '../../shared/botao-voltar/botao-voltar';
import { PetService } from '../../service/pet-service';
import { PetDto } from '../../dto/pet.dto';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pet',
  imports: [MatIconModule, MatButtonModule, BotaoVoltar, MatTableModule],
  templateUrl: './pet.html',
  styleUrl: './pet.scss',
})
export class Pet implements OnInit {
  listaPets: PetDto[] = [];
  displayedColumns: string[] = [
    'id',
    'nome',
    'especie',
    'raca',
    'idade',
    'restricoes',
    'tutor',
    'acoes',
  ];
  constructor(
    private dialog: MatDialog,
    private petService: PetService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.buscarPets();
  }

  abrirModal(event: any) {
    const dialogRef = this.dialog.open(ModalPet, {
      width: '1000px',
      data: { pet: event },
    });
    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.buscarPets();
      }
    });
  }

  buscarPets() {
    this.petService.findAll().subscribe((res) => {
      this.listaPets = res.body;
      this.cdr.detectChanges();
    });
  }
}
