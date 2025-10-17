import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TutorService } from '../../../service/tutor-service';
import { TutorDto } from '../../../dto/tutor.dto';

@Component({
  selector: 'app-modal-tutor',
  imports: [ReactiveFormsModule],
  templateUrl: './modal-tutor.html',
  styleUrl: './modal-tutor.scss',
})
export class ModalTutor {
  tutorForm: FormGroup;

  constructor(private fb: FormBuilder, private tutorService: TutorService) {
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
      let tutor = { ...(this.tutorForm.getRawValue() as TutorDto) };
      this.tutorService.create(tutor).subscribe();
    } else {
      this.tutorForm.markAllAsTouched();
    }
  }
}
