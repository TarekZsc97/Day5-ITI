import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  apiKey: string = `042e889dcbd3a45c95fbf6b44c772fb6`;

  constructor(private _HttpClient: HttpClient) {}
  getAllMovies(): Observable<any> {
    return this._HttpClient.get<any>(
      `https:api.themoviedb.org/3/trending/movie/day?api_key=${this.apiKey}`
    );
  }
  getMovieDetails(id: number): Observable<Movies> {
    return this._HttpClient.get<Movies>(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.apiKey}`
    );
  }
}
