import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatButtonModule, MatCardModule, MatSelectModule,
  MatDatepickerModule, MatNativeDateModule, MatAutocompleteModule, MatTableModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CdkTableModule} from '@angular/cdk/table';


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
import { MaterialTableComponent } from './shared/material-table/material-table.component';
import { MaterialTableService } from './services/material-table.service';


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
    HomeComponent,
    MaterialTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatTableModule,
    CdkTableModule
  ],
  providers: [ExpenseService,
  BudgetService,
  NavbarService,
  MaterialTableService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
