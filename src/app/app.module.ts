import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudantesComponent } from './estudantes/estudantes.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfessoresComponent } from './professores/professores.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    EstudantesComponent,
    StudentDetailComponent,
    MessagesComponent,
    ProfessoresComponent,
    TeacherDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
