import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-pet',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-pet.html',
  styleUrl: './modal-pet.scss',
})
export class ModalPet implements OnInit {
  private data: any = inject(MAT_DIALOG_DATA);
  petForm: FormGroup;

  tutores = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Souza' },
  ];

  especies = ['Cachorro', 'Gato', 'Pássaro', 'Outro'];

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalPet>
  ) {
    this.petForm = this.fb.group({
      tutor: [null, Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      restricoes: [''],
    });
  }

  ngOnInit(): void {
    console.log(this.data)
  }

  onSubmit() {
    if (this.petForm.valid) {
      console.log('Pet cadastrado:', this.petForm.value);
      alert('Pet cadastrado com sucesso!');
      this.petForm.reset();
    } else {
      this.petForm.markAllAsTouched();
    }
  }
}
