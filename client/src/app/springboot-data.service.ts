import { Injectable } from '@angular/core';
import { Subject, firstValueFrom, lastValueFrom } from 'rxjs';
import { Movie } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpringbootDataService {

  title!: string;

  searchTitle = new Subject<Movie>();

  constructor(private http: HttpClient) {

  }

  URL = 'http://localhost:8080/api/';

  getMoviesByTitle(title: string) {
    const queryParams = new HttpParams().set("query", encodeURIComponent(title));
    return lastValueFrom(
      this.http.get<Movie[]>(this.URL + "/search", { params: queryParams })
    )
  }
}
