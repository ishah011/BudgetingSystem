import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { Budget } from '../../models/budget.model';

@Component({
  selector: 'app-budget-add',
  templateUrl: './budget-add.component.html',
  styleUrls: ['./budget-add.component.css'],
})
export class BudgetAddComponent implements OnInit {
  isReccurring: boolean = false;
  constructor(private _budgetService: BudgetService) { }

  ngOnInit() {
  }

  addBudget($event): void{
		let budget = new Budget($event.srcElement.form[0].value, $event.srcElement.form[1].value, $event.srcElement.form[2].value, $event.srcElement.form[3].value);
    this._budgetService.addBudget(budget);
	}

  onReccurringChange(event){
    if(event.target.value === "Yes"){
      this.isReccurring = true;
    }
    else{
      this.isReccurring = false;
    }
  }

}
