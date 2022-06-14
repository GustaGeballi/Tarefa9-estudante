import { Injectable } from '@angular/core';
import { Professor } from './professor';
import { PROFESSORES } from './mock-teachers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  constructor(private messageService: MessageService) { }

  getProfessores(): Observable<Professor[]> {
    const professores = of(PROFESSORES);
    this.messageService.add('ProfessorService: fetched professores');
    return professores;
  }
}