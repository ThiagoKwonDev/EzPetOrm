import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PrestadorDto } from '../../../dto/prestador.dto';
import { PrestadorService } from '../../../service/prestador-service';

@Component({
  selector: 'app-modal-prestador',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-prestador.html',
  styleUrl: './modal-prestador.scss',
})
export class ModalPrestador implements OnInit {
  private data: any = inject(MAT_DIALOG_DATA);
  titulo: string = 'Cadastrar';
  prestadorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalPrestador>,
    private prestadorService: PrestadorService
  ) {
    this.prestadorForm = this.fb.group({
      id: [null],
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

  ngOnInit(): void {
    if (this.data.prestador) {
      this.titulo = 'Editar';
      this.prestadorForm.patchValue(this.data.prestador);
    }
  }

  onSubmit() {
    if (this.prestadorForm.valid) {
      const prestador = { ...this.prestadorForm.getRawValue() } as PrestadorDto;
      if (prestador.id === null) {
        const createPrestador = {
          nome: prestador.nome,
          email: prestador.email,
          telefone: prestador.telefone,
          endereco: prestador.endereco,
          senha: prestador.senha,
        };
        this.prestadorService.create(createPrestador).subscribe();
      } else {
        this.prestadorService.patch(prestador).subscribe();
      }
      this.dialogRef.close(true);
    } else {
      this.prestadorForm.markAllAsTouched();
    }
  }
}
