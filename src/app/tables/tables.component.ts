import { Component, OnInit } from '@angular/core';
import { User } from '../user/user.model';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    user: User[];

  constructor(private userService: DataService,
private route:Router) { }

  ngOnInit() {

    this.userService.getUsers().subscribe(data =>{
        this.user = data;
    })
  }

  deleteUser(user) {
    if (confirm(`Are you sure, you want to delete the user: ${user.username}?`)) {
      this.userService.deleteUser(user.id).subscribe( () => 
      this.getUserdata()
        );
    }
  }

  getUserdata(){
    this.userService.getUsers().subscribe(
      data => this.user = data
    );
  }
 /* editUser(user){
      this.route.navigateByUrl('/user',user.id);
  }*/

}
