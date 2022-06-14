import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { ProfessoresComponent } from './professores/professores.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

const routes: Routes = [
  {path: 'professores', component: ProfessoresComponent},
  {path: 'estudantes', component: EstudantesComponent},
  {path: 'detail/:id', component: StudentDetailComponent},
  {path: 'detailTeacher/:idProf', component: TeacherDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
