import { Component, OnInit, OnDestroy } from '@angular/core';
import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css'],
})

export class BudgetViewComponent implements OnInit {

  budgets: Budget[];
  serviceBudgets: Budget[];
  _subscription: Subscription;

  constructor(private _budgetService: BudgetService) {
    this._subscription = this._budgetService.currentBudget.subscribe((value) => {
      this.budgets = value;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

}
