import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  @Output() deletePost: EventEmitter<Post> = new EventEmitter();
  constructor(private postService: PostService) {}

  ngOnInit(): void {}

  onDelete(post) {
    this.deletePost.emit(post);
  }
}
