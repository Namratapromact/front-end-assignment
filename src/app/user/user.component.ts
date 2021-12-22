import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  pageTitle: string;
  ID: number;
  user: User = {
    id:null,
    userName: null,
    email: null,
  };
  constructor() { }

  ngOnInit() {
  }

  employeeTitles(user: User): void {

    if (!this.employee) {
      this.pageTitle = "No employee found";
    } else {
      if (this.ID === 0) {
        this.pageTitle = "Add Employee";

      } else {
        this.pageTitle = `Edit Employee: ${this.employee.firstName} ${this.employee.lastName}`;
      }
    }
  }
}
