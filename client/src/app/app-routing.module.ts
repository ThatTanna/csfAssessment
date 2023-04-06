import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchReviewComponent } from './search-review/search-review.component';
import { SearchComponent } from './search/search.component';
import { MovieReviewsListComponent } from './movie-reviews-list/movie-reviews-list.component';
import { AppComponent } from './app.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

const routes: Routes = [
  { path: 'movie-reviews-list/:title', component: MovieReviewsListComponent },
  { path: 'post-comment/:title/:movieName', component: PostCommentComponent },
    // { path: 'search-review', component: SearchReviewComponent},
  // { path: 'search', component: SearchComponent },
  // { path: 'search/:title', component: SearchComponent},
  // { path: 'api/search', component: SearchComponent },
  // { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: SearchReviewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
