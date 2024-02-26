import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../models/movies';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  Movies: Movies[] = [];
  constructor(private _MoviesService: MoviesService) {}
  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this._MoviesService.getAllMovies().subscribe({
      next: (response) => {
        this.Movies = response.results;
      },
    });
  }
}
