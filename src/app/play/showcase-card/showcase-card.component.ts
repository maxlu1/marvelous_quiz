import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PlayService } from '../play.service';

@Component({
  selector: 'app-showcase-card',
  templateUrl: './showcase-card.component.html',
  styleUrls: ['./showcase-card.component.sass']
})
export class ShowcaseCardComponent implements OnInit, OnChanges {
  @Input() picture: string;
  public pictureLoaded: boolean = false;
  constructor(
    public playService: PlayService
  ) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.pictureLoaded = false;
  }

  public loadImageComplete(): void {
    this.pictureLoaded = true;
  }
}
