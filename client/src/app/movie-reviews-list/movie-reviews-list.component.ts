import { Component } from '@angular/core';
import { Movie } from '../models';
import { SpringbootDataService } from '../services/springboot-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-reviews-list',
  templateUrl: './movie-reviews-list.component.html',
  styleUrls: ['./movie-reviews-list.component.css']
})
export class MovieReviewsListComponent {
  title!: string;
  movies: Movie[] = [];

  constructor(private SBDataService: SpringbootDataService,
    private activatedRoute: ActivatedRoute, private router: Router) { }
    
  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title']
this.SBDataService.getMoviesByTitle(this.title)
.then(result=>this.movies = result)
.catch(err=>console.log(err);
console.log('title being searched is', this.title)
console.log('movies are', this.movies)
    // this.title = this.activatedRoute.snapshot.params['title'];
    // this.movies.SBDataService.getMoviesByTitle(this.title);
    // this.param$ = this.activatedRoute.params.subscribe(
    //   async (params) => {
    //   this.title = params['title'];
    //   console.log(this.title) + "IS THE TITLE YO!";
    //   this.movies = await this.SBDataService.getReviews(this.title);
    //   console.log(this.movies);
    // }
    // );
  }
}