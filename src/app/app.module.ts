import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StudentComponent } from './student/student.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentComponent,
    SignupComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  exports: [
    HeaderComponent,
    StudentComponent,
    SignupComponent,
    SigninComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
