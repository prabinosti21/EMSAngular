import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ReviewService } from '../service/review.service';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.scss']
})
export class NewReviewComponent implements OnInit {
  
  constructor(private formBuilder : FormBuilder, private reviewService: ReviewService, private router : Router){}

  reviewForm !: FormGroup;
  reviewData !: any;
  
  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      comment : ['', Validators.required],
      userName : ['', Validators.required]
    })
  }


  saveComment():void{
    this.reviewData = this.reviewForm.value;
    this.reviewService.postComments(this.reviewData).subscribe((message : string)=>{
      alert(message);
      this.router.navigate(['review']);
    })
  }

}
