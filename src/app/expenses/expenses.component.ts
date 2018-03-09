import { Component, OnInit } from '@angular/core';
//import { ExpenseService} from '../expense.service';
import { Expense} from '../expense.model';

@Component({
	selector: 'app-expenses',
	templateUrl: './expenses.component.html',
	styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
	title = 'Expenses Log';
	value = "Boo";

	expenses: Expense[] = [
		new Expense("12/12/2017", "Gas", "29.00", "United Oil")
	];
	expense1: Expense;

	constructor() {}//private expenseService: ExpenseService)

	getExpenses(): void{
		// this.expenseService.getExpenses()
		// .subscribe(expenses => this.expenses = expenses);
	}

	ngOnInit() {
		this.getExpenses();

	}

	addThisExpense(): void{
		this.expenses.push(new Expense("03/09/2018", "Food", "6.35", "Viasat Cafe"));
		//this.expenses.push(this.expense1);
		this.value = "Yay";
	}
}
