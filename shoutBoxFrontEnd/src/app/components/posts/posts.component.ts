import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/post';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts:any;
  post = new Post();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getPostData();
  }
  getPostData() {
    this.dataService.getData().subscribe(res => {
       this.posts = res;
    });
  }

  insertData() {
    this.dataService.insertData(this.post).subscribe(res => {
        this.getPostData();
    });
  }

  deleteData(id:any) {
    this.dataService.deleteData(id).subscribe(res => {
      this.getPostData();
    })
  }

}
