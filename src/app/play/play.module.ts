import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayComponent } from './play/play.component';
import { PlayRoutingModule } from './play-routing.module';
import { MaterialModule } from '../shared/material/material.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ScoreComponent } from './score/score.component';
import { ShowcaseCardComponent } from './showcase-card/showcase-card.component';
import { ControlsComponent } from './controls/controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [PlayComponent, ToolbarComponent, ScoreComponent, ShowcaseCardComponent, ControlsComponent],
  imports: [
    HttpClientModule,
    MaterialModule,
    CommonModule,
    PlayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PlayModule { }
