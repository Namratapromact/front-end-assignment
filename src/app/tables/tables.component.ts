import { Component, OnInit } from '@angular/core';

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
    public tableData2: TableData;

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'User Name', 'Email'],
          dataRows: [
              ['1', 'Dakota Rice', 'niger@gmail.com'],
              ['2', 'Minerva Hooper', 'abc@gmail.com'],
              ['3', 'Sage Rodriguez', 'xyz@gmail.com'],
              ['4', 'Philip Chaney', 'hyu@gmail.com'],
              ['5', 'Doris Greene', 'alan@gmail.com'],
              ['6', 'Mason Porter', 'chile@gmail.com']
          ]
      };
      this.tableData2 = {
          headerRow: [ 'ID', 'User Name',  'Salary', 'Country', 'City' ],
          dataRows: [
              ['1', 'Dakota Rice','$36,738', 'Niger', 'Oud-Turnhout' ],
              ['2', 'Minerva Hooper', '$23,789', 'Curaçao', 'Sinaai-Waas'],
              ['3', 'Sage Rodriguez', '$56,142', 'Netherlands', 'Baileux' ],
              ['4', 'Philip Chaney', '$38,735', 'Korea, South', 'Overland Park' ],
              ['5', 'Doris Greene', '$63,542', 'Malawi', 'Feldkirchen in Kärnten', ],
              ['6', 'Mason Porter', '$78,615', 'Chile', 'Gloucester' ]
          ]
      };
  }

}
