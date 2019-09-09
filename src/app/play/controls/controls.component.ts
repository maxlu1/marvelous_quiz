import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ScoreService } from '../score/score.service';
import { ScoreItem } from '../utils/score-item.model';
import { Character } from '../utils/character.model';
import { PlayService } from '../play.service';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent implements OnInit {
  public playForm: FormGroup;
  @Input() chalenge: Character;
  @Output() nextChalenge = new EventEmitter();

  constructor(
    private scoreService: ScoreService,
    private playService: PlayService
  ) { }

  ngOnInit() {
    this.playForm = new FormGroup({
      characterName: new FormControl(
        null,
        {
          updateOn: "change",
          validators: [Validators.required]
        }
      )
    });
  }

  public onAnswer(typed: boolean): void {
    this.scoreService.addScore(new ScoreItem(this.chalenge.name, this.chalenge.picture, this.checkAnswer(typed)));
    this.playService.round++;
    this.nextChalenge.emit();
    this.playForm.reset();
  }


  private checkAnswer(typed: boolean): boolean {
    if (typed) {
      let success: boolean;
      this.playForm.value.characterName.toLowerCase() === this.chalenge.name.toLowerCase() ? success = true : success = false;
      return success;
    } else {
      return false;
    }
  }


  public onGiveup(): void {
    this.playForm.patchValue({ characterName: this.chalenge.name.toUpperCase() });
    this.playService.whoIsIt = this.chalenge.name;
  }
}
