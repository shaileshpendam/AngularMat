import { title } from 'process';
import { Post } from './../../post.model';
import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostServices } from '../../post.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enterContent = '';
  enterTitle = '';
  constructor(public postService:PostServices) { }

  ngOnInit(): void {
  }
  onSavePost(form:NgForm) {
    if(form.valid){
       this.postService.addPost(form.value.title,form.value.content);
       form.resetForm();
    }
    
  }

}
