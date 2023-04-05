import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Movie } from '../models';

// proxy-config.js
const SPRINGBOOT_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class SpringbootDataService {

  constructor(private http: HttpClient) { }

  getMoviesByTitle(title: string): Promise<Movie[]> {
    const queryParam = new HttpParams().set('query', title);
    return lastValueFrom(this.http.get<Movie[]>
      (`${SPRINGBOOT_URL}/search`, { params: queryParam}));
  }



}
