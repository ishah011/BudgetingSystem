import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class BudgetService {
  //Initialize the budget information
  budgets: Budget[] = [];
  newBudget: Budget;
  budgetChange = new BehaviorSubject<Budget[]>(this.budgets);
  currentBudget = this.budgetChange.asObservable();

  //Initialize the visibility of the add budget ability
  addBudgetVisible: boolean = false;
  budgetVisible = new BehaviorSubject<boolean>(this.addBudgetVisible);
  currentAddVisibility = this.budgetVisible.asObservable(); 

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

  addBudgetOpen(): void{
    this.addBudgetVisible = true;
    this.budgetVisible.next(this.addBudgetVisible);
  }

  addBudgetClose(): void{
    this.addBudgetVisible = false;
    this.budgetVisible.next(this.addBudgetVisible);
  }
}
