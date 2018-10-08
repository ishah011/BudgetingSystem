import { Injectable, OnInit } from '@angular/core';
import { Expense } from '../models/expense.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { MaterialTableService } from '../services/material-table.service';

@Injectable()
export class ExpenseService {

  expenses: Expense[] = [];
  newExpense: Expense;
  expenseChange = new BehaviorSubject<Expense[]>(this.expenses);
  currentExpense = this.expenseChange.asObservable();
  constructor(private _matTableService: MaterialTableService) {
    this._matTableService.setDisplayColumns(['Date', 'Category', 'Price', 'Location']);
  }

  addExpense(inputExpense: Expense): void {
    this.setExpense(inputExpense);
    this.expenses.push(this.newExpense);
    this.expenseChange.next(this.expenses);
    this._matTableService.addDataSource(this.expenses);
  }

  setExpense(inputExpense: Expense): void {
    this.newExpense = inputExpense;
  }

  getExpense(): Expense {
    return this.newExpense;
  }

  getExpenses(): Expense[] {
    return this.expenses;
  }
}
