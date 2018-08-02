import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegCompanyComponent } from './reg-company/reg-company.component';
import { RegApplicantComponent } from './reg-applicant/reg-applicant.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegCompanyComponent,
    RegApplicantComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
