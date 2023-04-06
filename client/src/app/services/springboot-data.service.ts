import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Comments, Movie } from '../models';

// proxy-config.js
const SPRINGBOOT_URL = 'https://csf-server-production.up.railway.app/api';
// const SPRINGBOOT_URL = '/api';
// const SPRINGBOOT_URL = 'http://localhost:8080/api';

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

  postComment(comment: Comments): Promise<void> {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const body = new HttpParams().appendAll({...comment})
    return lastValueFrom(this.http.post<void>(`${SPRINGBOOT_URL}/comment`, body.toString(), { headers }));
  }
  
}
