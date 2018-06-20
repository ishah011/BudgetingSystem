import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BudgetService {
  budgets: Budget[] = [
  ];
  newBudget: Budget;
  budgetChange = new BehaviorSubject<Budget[]>(this.budgets);
  currentBudget = this.budgetChange.asObservable();
  constructor() { }

  addBudget(inputBudget:Budget): void{
    this.setBudget(inputBudget);
    this.budgets.push(this.newBudget);
    this.budgetChange.next(this.budgets);
    console.log(this.budgets);
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
