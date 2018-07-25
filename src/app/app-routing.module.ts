import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpensesComponent } from './expenses/expenses.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'expenses', component: ExpensesComponent},
  {path: 'budgets', component: BudgetsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
