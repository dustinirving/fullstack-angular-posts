import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  createPost(post: Post) {
    this.postService.createPost(post).subscribe((post) => {
      this.posts.push(post);
    });
  }

  deletePost(post: Post) {
    this.posts = this.posts.filter((p) => {
      return p._id !== post._id;
    });
    this.postService.deletePost(post).subscribe();
  }
}
