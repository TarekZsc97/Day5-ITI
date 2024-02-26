import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css',
})
export class MovieDetailsComponent implements OnInit {
  movie!: Movies;
  constructor(
    private _MoviesService: MoviesService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieDetails() {
    let movieId = Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    this._MoviesService.getMovieDetails(movieId).subscribe({
      next: (response) => {
        this.movie = response;
        console.log(this.movie);
      },
    });
  }
}
