import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';
import { Subject } from 'rxjs';

@Injectable()
export class BudgetService {
  budgets: Budget[] = [
    new Budget("Rent", "1000.00", "No", "")
  ];
  newBudget: Budget;
  budgetChange: Subject<Budget[]> = new Subject<Budget[]>();
  constructor() { }

  addBudget(inputBudget:Budget): void{
    this.setBudget(inputBudget);
    this.budgets.push(this.newBudget);
    this.budgetChange.next(this.budgets);
  }

  setBudget(inputBudget:Budget): void{
    this.newBudget = inputBudget;
  }

  getBudget(): Budget{
    return this.newBudget;
  }

  getBudgets(): Budget[]{
    return this.budgets;
  }
}
