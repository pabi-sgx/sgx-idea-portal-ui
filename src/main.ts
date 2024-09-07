import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IdeasListComponent } from './app/featured/components/ideas-list/ideas-list.component';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './app/featured/components/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IdeasListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }