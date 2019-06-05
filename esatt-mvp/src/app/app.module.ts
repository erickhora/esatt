import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { MatGridListModule, MatListModule,
         MatFormFieldModule, MatAutocompleteModule,
         MatSelectModule, MatInputModule, MatTableModule, MatCheckboxModule,
         MatDividerModule,
         MatIconModule} from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';

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
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { FilterPipe } from './filter.pipe';
import { SignupService } from './services/signup.service';

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
    LatestHistoryComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatListModule,
    MatAutocompleteModule,
    MatInputModule,
    MatTableModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FileUploadModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
