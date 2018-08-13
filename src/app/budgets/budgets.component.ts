import { Component, OnInit, OnDestroy } from '@angular/core';
import { BudgetService } from '../services/budget.service';
import { Subscription }   from 'rxjs';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css'],
  providers: [BudgetService]
})
export class BudgetsComponent implements OnInit, OnDestroy {

  _subscription: Subscription;
  addBudgetVisible: boolean = false;

  constructor(private _budgetService: BudgetService) { 
    this._subscription = this._budgetService.currentAddVisibility.subscribe((value) => {
      this.addBudgetVisible = value;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._subscription.unsubscribe();
  }

}
