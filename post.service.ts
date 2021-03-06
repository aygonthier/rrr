import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  uri = 'http://localhost:4000';

  constructor(private http: HttpClient) {
  }

  getPosts() {
    return this.http.get(`${this.uri}/posts`);
  }

}
