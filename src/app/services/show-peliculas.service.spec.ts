import { TestBed } from '@angular/core/testing';

import { ShowPeliculasService } from './show-peliculas.service';

describe('ShowPeliculasService', () => {
  let service: ShowPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
