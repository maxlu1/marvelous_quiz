import { Component, OnInit } from '@angular/core';
import { ScoreService } from 'src/app/play/score/score.service';
import { ScoreItem } from 'src/app/play/utils/score-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.sass']
})
export class ScoreComponent implements OnInit {
  public score: ScoreItem[] = [];
  public scorePoints: number = 0;
  public messageScore: string[] = ["Looooser: none right answers!", "Not bad...: 1 right answer!", "Good: 2 right answers!", "Marvelous: 3 right answers!"];
  public feedbackMessage: string = "";

  constructor(
    private scoreService: ScoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.score = this.scoreService.score;
    this.scorePoints = this.scoreService.pointsScore;
    this.showFeedback();
    if (!this.score.length) {
      this.router.navigateByUrl('/play');
    }
  }

  private showFeedback(): void {
    let totalCorrect: number = 0;
    for (let entry of this.score) {
      if (entry.success) {
        totalCorrect++
      }
    }
    this.feedbackMessage = this.messageScore[totalCorrect];
  }

  public onRestart(): void {
    this.scoreService.resetGame();
  }

}
