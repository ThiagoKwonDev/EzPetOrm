import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tutor',
  imports: [ReactiveFormsModule],
  templateUrl: './tutor.html',
  styleUrl: './tutor.scss',
})
export class Tutor {
  tutorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.tutorForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,11}$')],
      ],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.tutorForm.valid) {
      console.log('Tutor cadastrado:', this.tutorForm.value);
      alert('Tutor cadastrado com sucesso!');
      this.tutorForm.reset();
    } else {
      this.tutorForm.markAllAsTouched();
    }
  }
}
