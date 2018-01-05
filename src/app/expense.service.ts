import { Injectable } from '@angular/core';
import { Expense } from './expense';

@Injectable()
export class ExpenseService {

  constructor() { }

  getExpenses(): Expense[]{
  	return {
		date: "12/12/2017",
		category: "Gas",
		price: "29.00",
		location: "United Oil"
	}
  }

}
