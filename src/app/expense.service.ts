import { Injectable } from '@angular/core';
import { Expense } from './expenses/expense.model';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ExpenseService {

	// expenses: Expense[] = [];
	// private totalExpenses = new Subject<Expense[]>();

	// constructor() {
	// 	this.add$ = this.totalExpenses.asObservable();
	//  }


	// getExpenses(): Observable<Expense[]>{
	// 	return of(this.expenses);
	// }

	// add(expense: Expense){
	// 	this.totalExpenses.next(expense);
	// }
}

/*
  constructor() { }
  expenses: Expense[]{
  	date: "12/12/2017",
		category: "Gas",
		price: "29.00",
		location: "United Oil"
  }

  getExpenses(): Expense[]{
  	return this.expenses
  }

  add( expense: Expense){
  	this.expenses.push(expense)
  }
  */
