import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpringbootDataService } from '../services/springboot-data.service';


@Component({
  selector: 'app-search-review',
  templateUrl: './search-review.component.html',
  styleUrls: ['./search-review.component.css']
})
export class SearchReviewComponent {
  headerTitle = 'Search Movie Reviews';

  searchForm!: FormGroup
  title!: string;
  
  constructor(private fb: FormBuilder, private router: Router, private sbdsvc: SpringbootDataService) { }
  
  ngOnInit(): void {
    this.searchForm = this.createForm()
  }
  
  private createForm(): FormGroup {
    return this.fb.group({
      title: this.fb.control<string>('', [Validators.required, Validators.minLength(2)]),
  })
  }

  searchMovie() {
    this.sbdsvc.getReviews().then(data => console.log(data))
  } 
}
