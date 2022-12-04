import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentComponent } from './student/student.component';


const appRoutes: Routes = [
  { path: 'admin', component: StudentComponent },
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
