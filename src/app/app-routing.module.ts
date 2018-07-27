import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'expenses', component: ExpensesComponent},
  {path: 'budgets', component: BudgetsComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
