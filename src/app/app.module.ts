import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SignupComponent } from './login/signup.component';
import { CreatePetComponent } from './pet/create-pet/create-pet.component';
import { ListPetComponent } from './pet/list-pet/list-pet.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
   // NavComponent,
    MainComponent,
   NavComponent,
   MainNavComponent,
   SignupComponent,
   CreatePetComponent,
   ListPetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
