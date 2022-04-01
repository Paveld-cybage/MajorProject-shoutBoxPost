import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/post';
import { DataService } from 'src/app/service/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id:any;
  data:any;
  post = new Post();

  constructor(private _location: Location, private route:ActivatedRoute, private dataService: DataService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.dataService.getDataId(this.id).subscribe(res => {
      this.data = res;
      this.post = this.data;
    })
  }

  updatePost() {
    this.dataService.updateData(this.id,this.post).subscribe(res => {
      this.getData();
    })
  }
   
  backClicked() {
    this._location.back();
  }
  

}
