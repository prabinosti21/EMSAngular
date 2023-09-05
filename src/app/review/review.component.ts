import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../service/review.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Review } from '../class/review';
import { Likedislikes } from '../class/likedislikes';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  reviewList : Review[] = [];
  likeDislikeList : Likedislikes[] = [];

  constructor(private reviewService: ReviewService, private router: Router, private route: ActivatedRoute){}
  
  ngOnInit(): void {
    this.getlikesdislikes();
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

  getlikesdislikes():void{
    this.reviewService.getLikesDislikes().subscribe((likeDislikes : Likedislikes[])=>{
      this.likeDislikeList = likeDislikes;
      console.log(this.likeDislikeList);
    })
  }

  updateLikes(id : any):void{
    this.reviewService.updateLikes(id).subscribe((message: any)=>{
      alert(message);
      this.ngOnInit();
    })
  }

  updateDisLikes(id : any):void{
    this.reviewService.updateDisLikes(id).subscribe((message: any)=>{
      alert(message);
      this.ngOnInit();
    })
  }
}
