import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayComponent } from './display/display.component';
import { EnterComponent } from './enter/enter.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: "register", component: RegisterComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: "dashboard", component: DashboardComponent
  },
  {
    path: "enter", component: EnterComponent
  },
  {
    path: "display", component: DisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
