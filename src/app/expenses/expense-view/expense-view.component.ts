import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-view',
  templateUrl: './expense-view.component.html',
  styleUrls: ['./expense-view.component.css']
})
export class ExpenseViewComponent implements OnInit {

  title = 'Expenses Log';
	value = "Boo";

	expenses: Expense[] = [
		new Expense("12/12/2017", "Gas", "29.00", "United Oil")
	];

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

	addExpense(event: any): void{
		//this.expenses.push(new Expense(event.date.value, event.category.value, event.price.value, event.location.value));
		this.value = event.value;
		// this.expenseService.add(expense)
		// .subscribe(expense => expense = this.model);
		//need to use the .subscribe of observable methods for this to work properly
		//see getExpenses in the service and the expenses component
	}

}
