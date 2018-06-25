import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';
import { BehaviorSubject, Observable } from 'rxjs';

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
