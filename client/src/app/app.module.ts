import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchReviewComponent } from './search-review/search-review.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpringbootDataService } from './services/springboot-data.service';
import { SearchComponent } from './search/search.component';
import { MovieReviewsListComponent } from './movie-reviews-list/movie-reviews-list.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { MaterialModule } from './material/material.module';

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
    MaterialModule,
  ],
  providers: [SpringbootDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
