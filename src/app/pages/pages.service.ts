import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  /* GET/POST/PUT/DELETE functions.
    PUT request not in use at the moment */

  constructor(private httpClient: HttpClient) { }
   postUrl = 'http://localhost:3000/posts';
  getPosts(): Observable <Post[]> {
    return this.httpClient.get<Post[]>(this.postUrl)
  }

  createPost(postBody: any): Observable<Post> {

    return this.httpClient.post<Post>(this.postUrl, postBody);
  }
  updatePost(postId: any, postBody: any): Observable<Post> {
    const postUrl = 'http://localhost:3000/posts'+postId;

   return this.httpClient.put<Post>(postUrl, postBody);
  }
  deletePost(postId: number): Observable<Post> {
    const postUrl = 'http://localhost:3000/posts'+'/'+postId;

   return this.httpClient.delete<Post>(postUrl);
  }
}
