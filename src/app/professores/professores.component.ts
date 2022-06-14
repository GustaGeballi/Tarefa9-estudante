import { Component, OnInit } from '@angular/core';

import { Professor } from '../professor';
import { ProfessorService } from '../professor.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  professores: Professor[] = [];

  professor: Professor = {
    id: 1,
    nome: 'Gustavo',
    sobrenome:'Geballi',
    idade: 18,
    CPF: '8876643329',
    telefone:'11989802317'    
  }

  selectedProfessor?: Professor;
  onSelect(professor: Professor): void {
  this.selectedProfessor = professor;
  this.messageService.add('ProfessoresComponent: Um professor foi selecionado');
}

  constructor(private professorService: ProfessorService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getProfessores();
  }

  getProfessores(): void {
    this.professorService.getProfessores()
        .subscribe(professores => this.professores = professores);
  }



}

  


