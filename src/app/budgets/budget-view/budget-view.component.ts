import { Component, OnInit } from '@angular/core';
import { Budget } from '../../models/budget.model';
import { BudgetService } from '../../services/budget.service'

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

}
