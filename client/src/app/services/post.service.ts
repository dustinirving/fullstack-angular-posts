import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsUrl: string = 'http://localhost:8080/api/posts';
  constructor(private http: HttpClient) {}

  // Get Posts
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  deletePost(post: Post): Observable<Post> {
    return this.http.delete<Post>(`${this.postsUrl}/${post._id}`);
  }
}
