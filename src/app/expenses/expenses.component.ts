import { Component, OnInit } from '@angular/core';
import { ExpenseService} from '../expense.service';
import { Expense} from '../expense';

@Component({
	selector: 'app-expenses',
	templateUrl: './expenses.component.html',
	styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
	title = 'Expenses Log';

	expenses: Expense[];

	constructor(private expenseService: ExpenseService) {}
	
	getExpenses(): void{
		this.expenseService.getExpenses()
		.subscribe(expenses => this.expenses = expenses);
	}

	ngOnInit() {
		this.getExpenses();

	}
}
