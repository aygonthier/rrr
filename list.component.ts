import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  posts: Post[];
  displayedColumns = ['author', 'text', 'status'];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService
    .getPosts()
    .subscribe((data: Post[]) => {
      this.posts = data;
      console.log('Data requested ... ');
      console.log(this.posts);
    });
  }

}
