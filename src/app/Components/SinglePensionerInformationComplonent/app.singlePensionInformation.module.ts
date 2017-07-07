/**
 * Created by Amila on 6/20/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
/*
 * component register for single person information
 */
import { PersonalInformationComponent } from './PersonalInformationComponent/app.personalInformation.component';
import { StepperComponent } from './StepperComponent/app.stepper.component';
import { ServiceInformationComponent } from './ServiceInformationComponent/app.service.information.component';
import { BankInformationComponent } from './BankInformationComponent/app.bank.information.component';
import { SalaryRevisionInformationComponent } from './SalaryRevisionInformationComponent/app.salary.revision.information.component';
import { PaymentInformationComponent  } from './PaymentInformationComponent/app.payment.information.component';

/*
 * data models import
 **/
@NgModule({
  declarations: [
    PersonalInformationComponent,
    ServiceInformationComponent,
    StepperComponent,
    BankInformationComponent,
    SalaryRevisionInformationComponent,
    PaymentInformationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  providers: [
  ],
  bootstrap: [],
  exports: [
    StepperComponent
  ]
})
export class SinglePensionInformationModule { }
