import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpringbootDataService } from '../services/springboot-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Comments } from '../models';

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  title!: string;
  movieName!: string;

  constructor(private activatedRoute: ActivatedRoute,
    private SBDataService: SpringbootDataService,
    private router: Router, private fb: FormBuilder) { }

  commentForm!: FormGroup

  ngOnInit(): void {
    this.title = this.activatedRoute.snapshot.params['title'];
    this.movieName = this.activatedRoute.snapshot.params['movieName'];
    this.commentForm = this.createForm()
  }

  private createForm(): FormGroup {
    return this.fb.group({
      name: this.fb.control<string>('', [Validators.required]),
      rating: this.fb.control<number>(0, [Validators.required]),
      comment: this.fb.control<string>('', [Validators.required])
    })
  }

  postComment() {
    const formData = this.commentForm.value as Comments;
    formData.movieName = this.movieName;
    console.log(formData);
    this.SBDataService.postComment(formData)
    this.back();
  }

  back() {
    this.router.navigate(['/movie-reviews-list', this.title]);
  }
}
