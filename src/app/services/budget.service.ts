import { Injectable } from '@angular/core';
import { Budget } from '../models/budget.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { MaterialTableService } from './material-table.service';

@Injectable()
export class BudgetService {
  // Initialize the budget information
  budgets: Budget[] = [];
  newBudget: Budget;
  budgetChange = new BehaviorSubject<Budget[]>(this.budgets);
  currentBudget = this.budgetChange.asObservable();

  // Initialize the visibility of the add budget ability
  addBudgetVisible = false;
  budgetVisible = new BehaviorSubject<boolean>(this.addBudgetVisible);
  currentAddVisibility = this.budgetVisible.asObservable();

  // Initialize the visibility of the add income ability
  addIncomeVisible = false;
  incomeVisible = new BehaviorSubject<boolean>(this.addIncomeVisible);
  currentIncomeVisibility = this.incomeVisible.asObservable();

  constructor(private _matTableService: MaterialTableService) {
    this._matTableService.setDisplayColumns(['Name', 'Amount', 'Recurring', 'Frequency']);
  }

  // Methods for adding and retrieving budgets
  addBudget(inputBudget: Budget): void {
    this.setBudget(inputBudget);
    this.budgets.push(this.newBudget);
    this.budgetChange.next(this.budgets);
    this._matTableService.addDataSource(this.budgets);
  }

  setBudget(inputBudget: Budget): void {
    this.newBudget = inputBudget;
  }

  getBudget(): Budget {
    return this.newBudget;
  }

  getBudgets(): Budget[] {
    return this.budgets;
  }

  // Methods for viewing the add budget form
  addBudgetOpen(): void {
    this.addBudgetVisible = true;
    this.budgetVisible.next(this.addBudgetVisible);
  }

  addBudgetClose(): void {
    this.addBudgetVisible = false;
    this.budgetVisible.next(this.addBudgetVisible);
  }

  // Methods for viewing the add income form
  addIncomeOpen(): void {
    this.addIncomeVisible = true;
    this.incomeVisible.next(this.addIncomeVisible);
  }

  addIncomeClose(): void {
    this.addIncomeVisible = false;
    this.incomeVisible.next(this.addIncomeVisible);
  }
}
