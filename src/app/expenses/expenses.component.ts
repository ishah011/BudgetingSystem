import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseService} from '../services/expense.service';
import { Expense} from '../models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [ExpenseService]
})
export class ExpensesComponent implements OnInit {
  @Input() addedExpense: Expense;
  formVisible = false;
  title = 'Expenses Log';

  expenses: Expense[] = [];
  _subscription: Subscription;

  constructor(private _expenseService: ExpenseService) {
    this._subscription = this._expenseService.currentExpense.subscribe((value) => {
      this.expenses = value;
    });
  }

  ngOnInit() {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  showForm() {
    this.formVisible = true;
  }

  modifyVisibility(): void {
    this.formVisible = false;
  }
}
