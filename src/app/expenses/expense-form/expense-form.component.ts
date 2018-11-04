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
  formVisible = true;
  constructor(private _expenseService: ExpenseService) {}

  addExpense($event): void {
    const elem = $event.srcElement;
    const expense = new Expense(elem.form[0].value, elem.form[2].value, '$' + elem.form[3].value, elem.form[4].value);
    this._expenseService.addExpense(expense);
    for (let i = 0; i < 5; i++) {
      $event.srcElement.form[i].value = '';
    }
  }

  closeForm(): void {
    this.formVisible = false;
    this.visibleForm.emit(this.formVisible);
  }

  ngOnInit() {
  }


}
