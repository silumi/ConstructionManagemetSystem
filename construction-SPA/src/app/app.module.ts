import { CardsComponent } from './dashboard/cards/cards.component';
import { AlertifyService } from './services/alertify.service';
import { ErrorInterceptor } from './services/Error-Intercepter';
import { RouterModule } from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './_guards/auth.guard';
import { BsDropdownModule } from 'ngx-bootstrap';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './dashboard/side-nav/side-nav.component';
import {TopNavComponent } from './dashboard/top-nav/top-nav.component';
import { SmallCardsComponent } from './dashboard/small-cards/small-cards.component';
import { SearchbarNavComponent } from './dashboard/searchbar-nav/searchbar-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent,
    DashboardComponent,
    LoginComponent,
    SideNavComponent,
    TopNavComponent,
    CardsComponent,
    SmallCardsComponent,
    SearchbarNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    AuthServiceService,
    AuthGuard,
    ErrorInterceptor,
    AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
