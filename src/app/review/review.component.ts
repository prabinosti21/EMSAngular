import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../class/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviewList : Review[] = [];

  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getCOmments();
  }

  getCOmments():void{
    this.reviewService.getComments().subscribe((reviews : Review[])=>{
      this.reviewList = reviews;
      console.log(this.reviewList);
    })
  }

  deleteComment(id: number):void{
    this.reviewService.deleteComments(id).subscribe((message: String)=>{
      alert(message);
      this.getCOmments();
    })
  }

}
