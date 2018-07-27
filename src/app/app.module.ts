import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExpenseService } from './services/expense.service';
import { BudgetService } from './services/budget.service';
import { NavbarService } from './services/navbar.service';


import { AppComponent } from './app.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseFormComponent } from './expenses/expense-form/expense-form.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { BudgetViewComponent } from './budgets/budget-view/budget-view.component';
import { BudgetAddComponent } from './budgets/budget-add/budget-add.component';
import { IncomeAddComponent } from './budgets/income-add/income-add.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ExpensesComponent,
    ExpenseFormComponent,
    BudgetsComponent,
    BudgetViewComponent,
    BudgetAddComponent,
    IncomeAddComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ExpenseService,
  BudgetService,
  NavbarService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
