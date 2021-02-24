import { Post } from './../../post.model';
import { Component, OnInit , Input, OnDestroy} from '@angular/core';
import { PostServices } from '../../post.service';
import {Subscription} from 'rxjs'
import { from } from 'rxjs';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit , OnDestroy{
  // posts = [{
  //   title: 'first post', content: "this is the first post"
  // },
  // { title: 'second post', content: "this is the second post" },
  // { title: 'third post', content: "this is the third post" },
  // {
  //   title: 'fourth post', content: "this is the fourth post"
  // }]
    posts:Post[] = []
    private postSub: Subscription
  constructor(public postService:PostServices) { 
     
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
   this.postSub = this.postService.getPostUpdateListener().subscribe((posts:Post[]) =>{
          this.posts =posts
    })
  }
  ngOnDestroy(){
    this.postSub.unsubscribe();
  }

}
