import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServicoService } from '../../../service/servico-service';
import { ServicoDto } from '../../../dto/servico.dto';

@Component({
  selector: 'app-modal-servico',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-servico.html',
  styleUrl: './modal-servico.scss',
})
export class ModalServico {
  private data: any = inject(MAT_DIALOG_DATA);
  servicoForm: FormGroup;
  titulo: string = 'Cadastrar';

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModalServico>,
    private servicoService: ServicoService
  ) {
    this.servicoForm = this.fb.group({
      id: [null],
      titulo: [null, Validators.required],
      descricao: ['', Validators.required],
      preco: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.data.servico) {
      this.titulo = 'Editar';
      this.servicoForm.patchValue(this.data.servico);
    }
  }

  onSubmit() {
    if (this.servicoForm.valid) {
      const servico = { ...this.servicoForm.getRawValue() } as ServicoDto;
      if (servico.id === null) {
        const createServico = {
          descricao: servico.descricao,
          titulo: servico.titulo,
          preco: servico.preco,
        };
        this.servicoService.create(createServico).subscribe();
      } else {
        this.servicoService.patch(servico).subscribe();
      }
      this.dialogRef.close(true);
    } else {
      this.servicoForm.markAllAsTouched();
    }
  }
}
