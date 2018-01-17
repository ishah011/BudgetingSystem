import { Injectable } from '@angular/core';
import { Expense } from './expense';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ExpenseService {

	constructor() { }
	
	expenses: Expense[] = [];

	getExpenses(): Observable<Expense[]>{
		return of(this.expenses);
	}

	add( expense: Expense){
		this.expenses.push(expense);
	}
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