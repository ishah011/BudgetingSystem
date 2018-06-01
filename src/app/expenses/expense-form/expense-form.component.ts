import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Expense} from '../expense.model';
//import { ExpenseService} from '../expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  @Output() expenseAdded = new EventEmitter<Expense>();
  @Output() visibleForm = new EventEmitter<boolean>();
  formVisible: boolean = true;
	// constructor(private expenseService ExpenseService) { }
	// // addExpense(expense): void {
	//		want to take input to form and format it into expense object
	// // 	this.expenseService.add(expense)
	// // }
	constructor(){} //private expenseService: ExpenseService

	addExpense($event): void{
		let expense = new Expense($event.srcElement.form[0].value, $event.srcElement.form[1].value, $event.srcElement.form[2].value, $event.srcElement.form[3].value);
    this.expenseAdded.emit(expense);
    // this.expenseService.add(expense)
		// .subscribe(expense => expense = this.model);
		//need to use the .subscribe of observable methods for this to work properly
		//see getExpenses in the service and the expenses component
	}

  closeForm(): void{
    this.formVisible = false;
    this.visibleForm.emit(this.formVisible);
  }

	ngOnInit() {
	}


}
