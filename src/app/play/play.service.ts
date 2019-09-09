import { Injectable, OnInit } from '@angular/core';
import { Character } from './utils/character.model';
import { dataMock } from './utils/data-mock'
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PlayService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public charactersData: any;

  public isLoading: boolean = true;

  public round: number = 0;
  public whoIsIt: string = "";

  public characters: Character[] = [];
  public quizChalange: Character[] = [];

  get character(): Character {
    this.whoIsIt = "";
    return this.quizChalange[this.round]
  }


  public getCharactersData(): Observable<any> {
    return this.httpClient.get<any>(`https://gateway.marvel.com/v1/public/characters?limit=64&offset=${Math.floor(Math.random() * 256)}&ts=1567811245578&apikey=${environment.marvelApiPublicKey}&hash=${environment.marvelApiHash}`).pipe(
      map((data => {
        window.localStorage.setItem("characters_loaded", JSON.stringify(data));
        return data;
      }))
    )
  }


  public mountCharactersList(): void {
    for (let entry of this.charactersData) {
      this.checkImageAvailability(entry.thumbnail.path) ? this.characters.push(new Character(entry.name, `${entry.thumbnail.path}/detail.${entry.thumbnail.extension}`)) : undefined;
    }
    if (!this.quizChalange.length) {
      this.mountQuizChalange();
    }
  }

  private mountQuizChalange(): void {
    this.isLoading = false;
    for (var _i = 0; _i < 3; _i++) {
      let _currentIndex: number = Math.floor(Math.random() * this.characters.length);
      this.quizChalange.unshift(this.characters[_currentIndex]);
      this.characters.splice(_currentIndex, 1);
    }
  }

  private checkImageAvailability(imagePath: string): boolean {
    let imageAvailable: boolean;
    imagePath.indexOf("image_not_available") > -1 ? imageAvailable = false : imageAvailable = true
    return imageAvailable;
  }

  public checkSavedData(): string {
    localStorage.setItem('characters_loaded', JSON.stringify(dataMock));
    return localStorage.getItem("characters_loaded");
  }  
}

