import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.css']
})
export class IncomeAddComponent implements OnInit {
  isRecurring = false;
  frequency: string;
  recurring: string;
  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

  addIncome($event): void {
    const income = new Budget('Income', $event.srcElement.form[0].value,
    $event.srcElement.form[1].value, this.recurring, this.frequency);
    this._budgetService.addBudget(income);
  }

  onRecurringChange(event) {
    if (this.recurring === 'Yes') {
      this.isRecurring = true;
    } else {
      this.isRecurring = false;
    }
  }

  closeAddIncome(): void {
    this._budgetService.addIncomeClose();
  }
}
