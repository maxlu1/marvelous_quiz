import { TestBed } from '@angular/core/testing';
import { PlayService } from './play.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from "../../environments/environment";
import { dataMock } from './utils/data-mock'

describe('PlayServiceTest', () => {
  let httpTestingController: HttpTestingController;
  let service: PlayService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(PlayService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('O serviço PLAY foi criado corretamente', () => {
    expect(service).toBeTruthy();
  });

  it('A resposta da consulta à API é preservada localmente',
  () => {
    localStorage.setItem('characters_loaded', JSON.stringify(dataMock));
    expect(service.checkSavedData()).toEqual(JSON.stringify(dataMock));
  });

});
