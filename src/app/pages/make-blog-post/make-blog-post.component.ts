import { Component, OnInit } from '@angular/core';
import { PagesService } from '../pages.service'

@Component({
  selector: 'app-make-blog-post',
  templateUrl: './make-blog-post.component.html',
  styleUrls: ['./make-blog-post.component.scss']
})
export class MakeBlogPostComponent implements OnInit {

  constructor(private pagesService: PagesService) { }

  ngOnInit(): void {
  }
  addNewPost(form: any) {

    /* Fetch date of post */
    let today = new Date();
    let day = String(today.getDate()).padStart(2, '0');
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let year = today.getFullYear();
    let date = year + '-' + month + '-' + day;

    /* fetch data from forms/date/randomid */
    let newPost = {
      id: Math.floor(Math.random()*898)+101,
      name: form.value.post_name,
      date: date,
      title: form.value.post_title,
      imgUrl: form.value.post_url,
      content: form.value.post_content
  }
  /* POST request to API */
  this.pagesService.createPost(newPost).subscribe(data => {
  });
}
}
