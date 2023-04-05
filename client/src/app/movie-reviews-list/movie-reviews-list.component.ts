import { Component, OnInit } from '@angular/core';
import { Movie } from '../models';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { SpringbootDataService } from '../services/springboot-data.service';

@Component({
  selector: 'app-movie-reviews-list',
  templateUrl: './movie-reviews-list.component.html',
  styleUrls: ['./movie-reviews-list.component.css']
})
export class MovieReviewsListComponent implements OnInit {
  title!: string;
  movies: Movie[] = [];
  noImg = 'assets/placeholder.jpg';

  constructor(private SBDataService: SpringbootDataService,
    private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title']
    this.SBDataService.getMoviesByTitle(this.title)
      .then(result => this.movies = result)
    // .catch(err => console.log(err);
    console.log('title being searched is', this.title)
    console.log('movies are', this.movies)
  }

  onBack(): void {
    this.router.navigate(['/search-review']);
  }

}