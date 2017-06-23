/**
 * Created by Amila on 6/20/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*
 * component register for single person information
 */
import { PersonalInformationComponent } from './PersonalInformationComponent/app.personalInformation.component';
@NgModule({
  declarations: [
    PersonalInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [],
  exports: [
    PersonalInformationComponent
  ]
})
export class SinglePensionInformationModule { }
