import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageTitle: string;
  ID: number;
  errorMessage: string;
  user: User = {
    id:null,
    username: null,
    email: null,
    password: null
  };
  constructor( private activatedRoute: ActivatedRoute,
    private userService: DataService, private route: Router,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      params => {
        this.ID = +params.get('id');
        this.getUser(this.ID);
      }
    );
  }

  getUser(id: number): void {
    this.userService.getUsersbyId(id).subscribe(
      (user: User) => this.userTitles(user)
    );
  }
  userTitles(user: User): void {
    this.user = user;
    if (!this.user) {
      this.pageTitle = "No user found";
    } else {
      if (this.ID === 0) {
        this.pageTitle = "Add User";

      } else {
        this.pageTitle = `Edit User Name: ${this.user.username}`;
      }
    }
  }

  saveUser(): void {
    if (this.ID == 0) {
      this.userService.addUser(this.user).subscribe(
        () =>
          this.onSaveComplete(`The new ${this.user.username} was added`),
        (error: any) => (this.errorMessage = <any>error)
      );
    } else {
      this.userService.updateUser(this.user).subscribe(
        () =>
          this.onSaveComplete(
            `The updated ${this.user.username} was saved`
          ),
        (error: any) => (this.errorMessage = <any>error)
      );
    }
  }

  onSaveComplete(message?: string): void {
    if (message) {
      console.log(message);
      if(this.ID == 0){
        alert(`Successfully Added User: ${this.user.username}`);
      }
      else{
        alert(`Successfully Updated User: ${this.user.username}`);
      }

    }
    this.route.navigateByUrl("/table");
  }
}
