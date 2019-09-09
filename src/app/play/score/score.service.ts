import { Injectable } from '@angular/core';
import { ScoreItem } from '../utils/score-item.model';
import { Router } from '@angular/router';
import { PlayService } from '../play.service';


@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(
    private router: Router,
    private playService: PlayService
  ) { }

  public finalScore: ScoreItem[] = [];
  public pointsScore: number = 0;

  public addScore(score: ScoreItem) {
    this.finalScore.unshift(score);
    this.countPoints(score.success);
  }

  private countPoints(success: boolean): void {
    success ? this.pointsScore++ : this.pointsScore--;
  }

  get score(): ScoreItem[] {
    return this.finalScore
  }

  public resetGame(): void {
    this.finalScore = [];
    this.pointsScore = 0;
    this.playService.round = 0;
    this.playService.whoIsIt = "";
    this.playService.quizChalange = [];
    this.router.navigateByUrl('/play');
  }

}
