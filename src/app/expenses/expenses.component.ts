import { Component, OnInit, Input } from '@angular/core';
//import { ExpenseService} from '../expense.service';
import { Expense} from './expense.model';

@Component({
	selector: 'app-expenses',
	templateUrl: './expenses.component.html',
	styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
	@Input() addedExpense: Expense;
	formVisible: boolean = false;
	title = 'Expenses Log';

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

	showForm(){
		this.formVisible = true;
	}

	modifyVisibility(): void{
		this.formVisible = false;
	}

	addExpense(expenseData: Expense){
		this.expenses.push(expenseData);
		//this.value = event.value;
		// this.expenseService.add(expense)
		// .subscribe(expense => expense = this.model);
		//need to use the .subscribe of observable methods for this to work properly
		//see getExpenses in the service and the expenses component
	}
}
