import { Component, OnInit, Input } from '@angular/core';
import { Estudante } from '../estudante';


@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  @Input() estudante?: Estudante;

  constructor() { }


  ngOnInit(): void {
  }

}
