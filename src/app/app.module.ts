import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './posts/post-create/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list/post-list.component';
import { HeaderComponent } from './header/header/header.component';
import { FormsModule } from '@angular/forms';

import {MatInputModule} from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModules } from './material.module';
import { PostServices } from './posts/post.service';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    AppMaterialModules
  ],
  providers: [
    PostServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
