import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Estado } from '../../shared/estado.model';

@Component({
  selector: 'app-estado-dialog',
  templateUrl: './estado-dialog.component.html',
  styleUrls: ['./estado-dialog.component.scss']
})
export class EstadoDialogComponent implements OnInit {

  title: string;
  estadoForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<EstadoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private estado: Estado
  ) { }

  ngOnInit() {
    this.title = this.estado.id ? 'Editando estado' : 'Criando novo estado';
    this.estadoForm = new FormGroup({
      id: new FormControl({value: this.estado.id, disabled: true}),
      nome: new FormControl(this.estado.nome, [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  save() {
    this.dialogRef.close(this.estadoForm.getRawValue());
  }

  cancel() {
    this.dialogRef.close();
  }

}
