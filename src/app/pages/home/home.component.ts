import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service'
import { Post } from '../post';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
/* create array inherited of interface Post */
 postList: Post[] = [];

  constructor(private pagesService: PagesService) { }

ngOnInit(): void {
  /* Fetch PostData from API */
    this.pagesService.getPosts().subscribe(data => {
    this.postList = data;
    });
  }

  /* Function for deleting active posts */
  deletePost(postId:number){
    this.pagesService.deletePost(postId).subscribe(data => {
      console.log('deleted ', postId);
    });
  }
}
