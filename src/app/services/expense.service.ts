import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';
import { BehaviorSubject, Observable } from 'rxjs';
// TODO: make expense work with the service instead of the way it's working right now
@Injectable()
export class ExpenseService {

  expenses: Expense[] = [];
  newExpense: Expense;
  expenseChange = new BehaviorSubject<Expense[]>(this.expenses);
  currentExpense = this.expenseChange.asObservable();
  constructor() { }

  addExpense(inputExpense:Expense): void{
    this.setExpense(inputExpense);
    this.expenses.push(this.newExpense);
    this.expenseChange.next(this.expenses);
  }

  setExpense(inputExpense:Expense): void{
    this.newExpense = inputExpense;
  }

  getExpense(): Expense{
    return this.newExpense;
  }

  getExpenses(): Expense[]{
    return this.expenses;
  }
}
