import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PupilComponent } from './pupil/pupil.component';
import {PupilService} from './common/service/pupil.service';



@NgModule({
  declarations: [PupilComponent],
  imports: [
    CommonModule,
  ],
  providers: [
    PupilService
  ],
  exports: [
    PupilComponent
  ]
})
export class PupilsModule { }
