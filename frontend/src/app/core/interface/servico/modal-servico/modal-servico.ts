import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-servico',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-servico.html',
  styleUrl: './modal-servico.scss',
})
export class ModalServico {
  private data: any = inject(MAT_DIALOG_DATA);
  servicoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalServico>
  ) {
    this.servicoForm = this.fb.group({
      titulo: [null, Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log(this.data);
  }

  onSubmit() {
    if (this.servicoForm.valid) {
      console.log('Pet cadastrado:', this.servicoForm.value);
      alert('Pet cadastrado com sucesso!');
      this.servicoForm.reset();
    } else {
      this.servicoForm.markAllAsTouched();
    }
  }
}
