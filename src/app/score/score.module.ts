import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { ScoreRoutingModule } from './score-routing.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [ScoreComponent],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    MaterialModule
  ]
})
export class ScoreModule { }
