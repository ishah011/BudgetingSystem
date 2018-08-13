import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Expense} from '../../models/expense.model';
import { ExpenseService} from '../../services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {
  @Output() visibleForm = new EventEmitter<boolean>();
  formVisible: boolean = true;
	constructor(private _expenseService: ExpenseService){}

	addExpense($event): void{
		let expense = new Expense($event.srcElement.form[0].value, $event.srcElement.form[1].value, $event.srcElement.form[2].value, $event.srcElement.form[3].value);
    this._expenseService.addExpense(expense);
    for(let i = 0; i < 4; i++){
      $event.srcElement.form[i].value = "";
    }
	}

  closeForm(): void{
    this.formVisible = false;
    this.visibleForm.emit(this.formVisible);
  }

	ngOnInit() {
	}


}
