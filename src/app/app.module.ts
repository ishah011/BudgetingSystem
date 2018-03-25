import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './expense.service';


import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { ExpenseViewComponent } from './expenses/expense-view/expense-view.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetViewComponent } from './budgets/budget-view/budget-view.component';
import { BudgetAddComponent } from './budgets/budget-add/budget-add.component';
import { IncomeAddComponent } from './budgets/income-add/income-add.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    ExpenseViewComponent,
    BudgetsComponent,
    BudgetViewComponent,
    BudgetAddComponent,
    IncomeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
