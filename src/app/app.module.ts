import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './expense.service';


import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseFormComponent } from './expenses/expense-form/expense-form.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetViewComponent } from './budgets/budget-view/budget-view.component';
import { BudgetAddComponent } from './budgets/budget-add/budget-add.component';
import { IncomeAddComponent } from './budgets/income-add/income-add.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    BudgetsComponent,
    BudgetViewComponent,
    BudgetAddComponent,
    IncomeAddComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ExpenseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
