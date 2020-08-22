import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
})
export class CreatePostComponent implements OnInit {
  @Output() createPost: EventEmitter<any> = new EventEmitter();

  title: string;
  body: string;
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const post = {
      title: this.title,
      body: this.body,
    };
    this.createPost.emit(post);
    this.title = '';
    this.body = '';
  }
}
