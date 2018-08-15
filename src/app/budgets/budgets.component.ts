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

  _addBudgetSubscription: Subscription;
  _addIncomeSubscription: Subscription;
  addBudgetVisible: boolean = false;
  addIncomeVisible: boolean = false;

  constructor(private _budgetService: BudgetService) { 
    this._addBudgetSubscription = this._budgetService.currentAddVisibility.subscribe((value) => {
      this.addBudgetVisible = value;
    });
    this._addIncomeSubscription = this._budgetService.currentIncomeVisibility.subscribe((value) => {
      this.addIncomeVisible = value;
    })
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    this._addBudgetSubscription.unsubscribe();
    this._addIncomeSubscription.unsubscribe();
  }

}
