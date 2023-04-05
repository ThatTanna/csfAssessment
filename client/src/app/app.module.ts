import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchReviewComponent } from './search-review/search-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SpringbootDataService } from './services/springboot-data.service';
import { SearchComponent } from './search/search.component';
import { MovieReviewsListComponent } from './movie-reviews-list/movie-reviews-list.component';
import { PostCommentComponent } from './post-comment/post-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchReviewComponent,
    SearchComponent,
    MovieReviewsListComponent,
    PostCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [SpringbootDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
