import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatGridListModule, MatListModule,
         MatFormFieldModule, MatAutocompleteModule,
         MatSelectModule, MatInputModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TeamsComponent } from './home/teams/teams.component';
import { HistoryComponent } from './history/history.component';
import { BudgetComponent } from './budget/budget.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { MainComponent } from './main/main.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';
import { MainLayoutComponent } from './layouts/main-layout.component';
import { SignupComponent } from './main/signup/signup.component';
import { LatestHistoryComponent } from './home/latest-history/latest-history.component';
import { AuthService } from './main/auth.service';
import { AuthGuard } from './main/auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TeamsComponent,
    HistoryComponent,
    BudgetComponent,
    CreateProjectComponent,
    MainComponent,
    HomeLayoutComponent,
    MainLayoutComponent,
    SignupComponent,
    LatestHistoryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    NgbModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MDBBootstrapModule.forRoot(),
    FileUploadModule,
    HttpModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
