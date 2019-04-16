import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashComponent } from './components/dash/dash.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {
     path: '', canActivate:[AuthGuard],component:LoginComponent
  },
  {
    path: 'dash',canActivate:[AuthGuard], component:DashComponent
 }, 
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
 
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(routes),FormsModule
  ],
  providers: [AuthGuard,AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
