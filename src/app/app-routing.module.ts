import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MakeBlogPostComponent } from './pages/make-blog-post/make-blog-post.component';

const routes: Routes = [  
  {path: "", component: HomeComponent},
  {path: "make-blog-post", component: MakeBlogPostComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
