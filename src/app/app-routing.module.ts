import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { StarttestComponent } from './starttest/starttest.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: '', component : HomeComponent },
  { path: 'login', component : LoginComponent},
  { path: 'starttest', component : StarttestComponent},
  { path: 'register', component : RegisterComponent},
  { path: 'about', component: AboutComponent},
  { path: 'questions', component: QuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
