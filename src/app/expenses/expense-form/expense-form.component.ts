import { Component, OnInit } from '@angular/core';
import { Expense} from '../expense.model';
//import { ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

	// constructor(private expenseService ExpenseService) { }
	// // addExpense(expense): void {
	//		want to take input to form and format it into expense object
	// // 	this.expenseService.add(expense)
	// // }
	constructor(){} //private expenseService: ExpenseService

	model: Expense[] = [];

	addExpense($event): void{
		let expense = new Expense($event.date, $event.category, $event.price, $event.location);
		// this.expenseService.add(expense)
		// .subscribe(expense => expense = this.model);
		//need to use the .subscribe of observable methods for this to work properly
		//see getExpenses in the service and the expenses component
	}


	ngOnInit() {
	}


}
