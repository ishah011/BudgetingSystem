import { Injectable } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class MaterialTableService {
  displayedColumns: string[] = [];
  dataSource = [{}];

  dataSourceChange: BehaviorSubject<object[]> = new BehaviorSubject<object[]>(this.dataSource);
  currentDataSource = this.dataSourceChange.asObservable();
  displayedColumnsChange: BehaviorSubject<string[]> = new BehaviorSubject<string[]>(this.displayedColumns);
  currentDisplayedColumns = this.displayedColumnsChange.asObservable();

  constructor() { }

  setDisplayColumns (columns: string[]) {
    this.displayedColumns = columns;
    this.displayedColumnsChange.next(this.displayedColumns);
  }

  addDataSource(data: object[]) {
    this.dataSource = data;
    this.dataSourceChange.next(this.dataSource);
  }

  appendToDataSource(data) {
    this.dataSource.push(data);
    this.addDataSource(this.dataSource);
    this.dataSourceChange.next(this.dataSource);
  }
}
