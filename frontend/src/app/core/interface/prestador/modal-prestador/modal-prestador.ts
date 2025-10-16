import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-modal-prestador',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-prestador.html',
  styleUrl: './modal-prestador.scss',
})
export class ModalPrestador {
  prestadorForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.prestadorForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: [
        '',
        [Validators.required, Validators.pattern('^[0-9]{10,11}$')],
      ],
      endereco: ['', Validators.required],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.prestadorForm.valid) {
      console.log('Tutor cadastrado:', this.prestadorForm.value);
      alert('Tutor cadastrado com sucesso!');
      this.prestadorForm.reset();
    } else {
      this.prestadorForm.markAllAsTouched();
    }
  }
}
