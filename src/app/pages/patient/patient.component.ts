import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface Patient {
  nome: string;
  cpf: number;
  peso: number;
  altura: number;
  profissao: string;
  dataNascimento: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
})
export class PatientComponent implements OnInit {
  patientForm: FormGroup;
  patientInfo: Patient = {
    nome: '',
    cpf: 0,
    peso: 0,
    profissao: '',
    dataNascimento: '',
    altura: 0
  };

  constructor() { }

  ngOnInit() {
    const { nome, peso, altura, profissao, dataNascimento, cpf } = this.patientInfo
    this.patientForm = new FormGroup({
      nome: new FormControl(nome, Validators.required),
      peso: new FormControl(peso, Validators.required),
      cpf: new FormControl(cpf, [Validators.required, Validators.minLength(11)]),
      altura: new FormControl(altura, Validators.required),
      profissao: new FormControl(profissao, Validators.required),
      dataNascimento: new FormControl(dataNascimento, Validators.required)
    })

  }

}
