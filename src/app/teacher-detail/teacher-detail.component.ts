import { Component, OnInit, Input } from '@angular/core';
import { Professor } from '../professor';


@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.css']
})
export class TeacherDetailComponent implements OnInit {

  @Input() professor?: Professor;

  constructor() { }


  ngOnInit(): void {
  }

}
