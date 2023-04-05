import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

// proxy-config.js
const SPRINGBOOT_URL = '/api';

@Injectable({
  providedIn: 'root'
})
export class SpringbootDataService {

  constructor(private http: HttpClient) { }

  getReviews() {
    return lastValueFrom(this.http.get(SPRINGBOOT_URL + '/search'));
  }

}
