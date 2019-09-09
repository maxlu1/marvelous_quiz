import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import { StartRoutingModule } from './start.routing.module';
import { MaterialModule } from '../shared/material/material.module';



@NgModule({
  declarations: [StartComponent],
  imports: [
    MaterialModule,
    CommonModule,
    StartRoutingModule

  ]
})
export class StartModule { }
