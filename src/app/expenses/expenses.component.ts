import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpenseService} from '../services/expense.service';
import { MaterialTableService } from '../services/material-table.service';
import { Expense} from '../models/expense.model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css'],
  providers: [ExpenseService, MaterialTableService]
})
export class ExpensesComponent implements OnInit {
  @Input() addedExpense: Expense;
  formVisible = false;
  title = 'Expenses Log';
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  tempTotals = [
    {month: 'January', total: '1452.00'},
    {month: 'February', total: '1561.02'},
    {month: 'March', total: '1001.02'},
    {month: 'April', total: '1578.08'},
    {month: 'May', total: '1354.25'},
    {month: 'June ', total: '1785.23'},
    {month: 'July', total: '1002.54'},
    {month: 'August', total: '985.24'},
    {month: 'September', total: '1677.95'},
    {month: 'October', total: '1652.48'},
    {month: 'November', total: '1203.45'},
    {month: 'December', total: '2103.54'}
  ];
  totalExpense = 'No Month Selected';
  total: {month: string, total: string};

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

  getTotal(value): void {
    if (value !== undefined) {
      this.total =  this.tempTotals.find(total => total.month === value);
      this.totalExpense = '$' + this.total.total;
    } else {
      this.totalExpense = '$0.00';
    }
  }
}
