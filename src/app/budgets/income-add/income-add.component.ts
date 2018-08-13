import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-income-add',
  templateUrl: './income-add.component.html',
  styleUrls: ['./income-add.component.css']
})
export class IncomeAddComponent implements OnInit {
  isReccurring: boolean = false;
  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

  addIncome($event): void{
    let income = new Budget("Income", $event.srcElement.form[0].value, $event.srcElement.form[1].value, $event.srcElement.form[2].value, $event.srcElement.form[3].value);
    this._budgetService.addBudget(income);
  }

  onReccurringChange(event){
    if(event.target.value === "Yes"){
      this.isReccurring = true;
    }
    else{
      this.isReccurring = false;
    }
  }

  closeAddIncome(): void{
    this._budgetService.addIncomeClose();
  }
}
