import { Injectable } from '@angular/core';
import {Post} from './post.model';
import {Subject} from 'rxjs'
@Injectable({providedIn:'root'})
export class PostServices {
    private posts:Post[] = [];
    private postsUpload = new Subject<Post[]>();
    getPosts() {
        return [...this.posts];
    }

    getPostUpdateListener(){
        return this.postsUpload.asObservable();
    }


    addPost(title:string, content:string){
        const post:Post = {
            title:title , content:content}
            this.posts.push(post);
            this.postsUpload.next([...this.posts]);
        }
}