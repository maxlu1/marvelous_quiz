import { Component, OnInit } from '@angular/core';
import { PlayService } from '../play.service';
import { Character } from '../utils/character.model';
import { ScoreService } from '../score/score.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.sass']
})
export class PlayComponent implements OnInit {
  public character: Character;

  constructor(
    public playService: PlayService,
    private scoreService: ScoreService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setChalenge();
  }

  public setChalenge(): void {
    if (this.scoreService.finalScore.length > 2) {
      setTimeout(() => {
        this.router.navigateByUrl('/score');
      }, 200);
    } else {
      if (!this.character) {
        if (window.localStorage.getItem("characters_loaded") == undefined) {
          this.playService.getCharactersData().subscribe(
            response => {
              this.playService.charactersData = response.data.results;
              this.playService.mountCharactersList();
              this.character = this.playService.character;
            },
            error => {
              console.warn(error);
              window.location.reload();
            }
          )
        } else {
          this.playService.charactersData = JSON.parse(window.localStorage.getItem("characters_loaded")).data.results;
          this.playService.mountCharactersList();
          this.character = this.playService.character;
        }
      } else {
        this.playService.mountCharactersList();
        this.character = this.playService.character;
      }


    }
  }

}
