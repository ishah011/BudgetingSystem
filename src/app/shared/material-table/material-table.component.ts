import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'rxjs';
import { MaterialTableService } from '../../services/material-table.service';

@Component({
  selector: 'app-material-table',
  templateUrl: './material-table.component.html',
  styleUrls: ['./material-table.component.css']
  // providers: [MaterialTableService]
})
export class MaterialTableComponent implements OnInit {
  displayedColumns: string[];
  dataSource: object[];
  matData: MatTableDataSource<object>;
  _dataSubscription: Subscription;
  _columnsSubscription: Subscription;
  newSource: object[];

  constructor(private _matTableService: MaterialTableService) {
    this._dataSubscription = this._matTableService.currentDataSource.subscribe((value) => {
      this.dataSource = value;
      this.createTable(this.dataSource);
    });
    this._columnsSubscription = this._matTableService.currentDisplayedColumns.subscribe((value) => {
      this.displayedColumns = value;
    });
  }

  createTable(data: object[]) {
    this.matData = new MatTableDataSource(
      data
    );
  }

  // applyFilter(filterValue: string) {
  //   filterValue = filterValue.trim(); // Remove whitespace
  //   filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
  //   this.dataSource.filter = filterValue;
  // }

  ngOnInit() {
  }

}
