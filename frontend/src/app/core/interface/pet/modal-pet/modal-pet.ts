import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PetService } from '../../../service/pet-service';
import { PetDto } from '../../../dto/pet.dto';

@Component({
  selector: 'app-modal-pet',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-pet.html',
  styleUrl: './modal-pet.scss',
})
export class ModalPet implements OnInit {
  private data: any = inject(MAT_DIALOG_DATA);
  petForm: FormGroup;
  titulo: string = 'Cadastrar';
  especies = ['Cachorro', 'Gato', 'Pássaro', 'Outro'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalPet>,
    private petService: PetService
  ) {
    this.petForm = this.fb.group({
      id: [null],
      tutor: [null, Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      restricoes: [''],
    });
  }

  ngOnInit(): void {
    if (this.data.pet) {
      this.titulo = 'Editar';
      this.petForm.patchValue(this.data.pet);
    }
  }

  onSubmit() {
    if (this.petForm.valid) {
      const pet = { ...this.petForm.getRawValue() } as PetDto;
      if (pet.id === null) {
        const createPet = {
          tutor: pet.tutor,
          nome: pet.nome,
          especie: pet.especie,
          raca: pet.raca,
          idade: pet.idade,
          restricoes: pet.restricoes,
        };
        this.petService.create(createPet).subscribe();
      } else {
        this.petService.patch(pet).subscribe();
      }
      this.dialogRef.close(true);
    } else {
      this.petForm.markAllAsTouched();
    }
  }
}
