import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-pet',
  imports: [ReactiveFormsModule, NgSelectModule],
  templateUrl: './pet.html',
  styleUrl: './pet.scss',
})
export class Pet {
  petForm: FormGroup;

  // Simulação de tutores cadastrados
  tutores = [
    { id: 1, nome: 'João Silva' },
    { id: 2, nome: 'Maria Oliveira' },
    { id: 3, nome: 'Carlos Souza' },
  ];

  especies = ['Cachorro', 'Gato', 'Pássaro', 'Outro'];

  constructor(private fb: FormBuilder) {
    this.petForm = this.fb.group({
      tutor: [null, Validators.required],
      nome: ['', [Validators.required, Validators.minLength(2)]],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(0)]],
      restricoes: [''],
    });
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
