import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  post:any = [];
    
  constructor(private postService: DataService,) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data =>{
      this.post = data;
      console.log(data);
    })
  }

  getPostdata(){
    this.postService.getPosts().subscribe(
      data => this.post = data
    );
  }
}
