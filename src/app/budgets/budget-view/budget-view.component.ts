// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Budget } from '../../models/budget.model';
// import { BudgetService } from '../../services/budget.service';
// import { Subscription }   from 'rxjs';

// @Component({
//   selector: 'app-budget-view',
//   templateUrl: './budget-view.component.html',
//   styleUrls: ['./budget-view.component.css'],
//   providers: [BudgetService]
// })

// export class BudgetViewComponent implements OnInit {
  
//   budgets: Budget[];
//   serviceBudgets: Budget[];
//   _subscription: Subscription;

//   constructor(private _budgetService: BudgetService) {
//     this._subscription = this._budgetService.currentBudget.subscribe((value) => {
//       this.budgets = value;
//       // console.log(value);
//     });
//   }

//   ngOnInit() {

//   }

//   getBudgets(){
//     console.log("budgets is of length: " + this.budgets);
//     console.log("service budgets is of length: " + this._budgetService.budgets.length);
//     this.budgets.forEach(element => {
//       console.log("budgets: " + element.name);
//     });
//     this.serviceBudgets = this._budgetService.getBudgets();
//     this.serviceBudgets.forEach(element => {
//       console.log("service budgets: " + element.name);
//     });
//   }

//   ngOnDestroy(){
//     // this._subscription.unsubscribe();
//   }

// }

import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-budget-view',
  templateUrl: './budget-view.component.html',
  styleUrls: ['./budget-view.component.css'],
  providers: [BudgetService]
})
export class BudgetViewComponent implements OnInit {

  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

  getBudgets(){
    console.log(this._budgetService.getBudgets().length);
  }

}
