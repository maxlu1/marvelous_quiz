import { Component, OnInit, OnChanges } from '@angular/core';
import { ScoreService } from './score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit  {
  public score: number = 0;
  constructor(
    public scoreService:ScoreService
  ) { }

  ngOnInit() {
    this.score = this.scoreService.pointsScore;
  }

}
