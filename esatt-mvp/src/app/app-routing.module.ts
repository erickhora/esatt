import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
// import { TeamsComponent } from './home/teams/teams.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { BudgetComponent } from './budget/budget.component';
import { MainComponent } from './main/main.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { SignupComponent } from './main/signup/signup.component';
import { AuthGuard } from './main/auth-guard.service';

const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
    { path: '', component: MainComponent }
    ]
  },
  { path: 'home', /*canActivate: [AuthGuard],*/ component: HomeLayoutComponent, children: [
    { path: 'home', component: HomeComponent }
    ]
  },
  { path: 'home/history', component: HistoryComponent },
  { path: 'home/new-project', component: CreateProjectComponent },
  { path: 'home/new-project/budget', component: BudgetComponent },
  { path: 'signup', component: SignupComponent },
  // { path: 'home/teams', component: TeamsComponent },
  { path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
