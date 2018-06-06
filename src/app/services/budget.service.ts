import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';

@Injectable()
export class BudgetService {
  budgets: Budget[] = [
    new Budget("Rent", "1000.00", "No", "")
  ];
  newBudget: Budget;
  constructor() { }

  addBudget(inputBudget:Budget): void{
    this.setBudget(inputBudget);
    this.budgets.push(this.newBudget);
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
