import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css'],
})
export class BudgetAddComponent implements OnInit {
  isRecurring = false;
  frequency: string;
  recurring: string;
  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

  addBudget($event): void {
    const budget = new Budget('Expense', $event.srcElement.form[0].value,
    $event.srcElement.form[1].value, this.recurring, this.frequency);
    this._budgetService.addBudget(budget);
  }

  onRecurringChange(event) {
    if (this.recurring === 'Yes') {
      this.isRecurring = true;
    } else {
      this.isRecurring = false;
    }
  }

  closeAddBudget(): void {
    this._budgetService.addBudgetClose();
  }

}
