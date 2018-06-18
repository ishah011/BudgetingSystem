import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../services/budget.service';

@Component({
  selector: 'app-budgets',
  templateUrl: './budgets.component.html',
  styleUrls: ['./budgets.component.css'],
  providers: [BudgetService]
})
export class BudgetsComponent implements OnInit {

  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

}
