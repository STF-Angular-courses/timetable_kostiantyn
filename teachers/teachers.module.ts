import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import {TeacherService} from './common/services/teacher.service';



@NgModule({
  declarations: [TeacherComponent],
  imports: [
    CommonModule
  ],
  providers: [
    TeacherService
  ]
})
export class TeachersModule { }
