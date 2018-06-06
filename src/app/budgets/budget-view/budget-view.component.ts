import { Component, OnInit, OnDestroy } from '@angular/core';
import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service'
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css'],
  providers: [BudgetService]
})
export class BudgetViewComponent implements OnInit {
  budgets: Budget[];
  _subscription: Subscription;
  constructor(private _budgetService: BudgetService) {
    this.budgets = _budgetService.budgets;
    this._subscription = _budgetService.budgetChange.subscribe((value) => {
      this.budgets = value;
    });
  }

  ngOnInit() {

  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

}
