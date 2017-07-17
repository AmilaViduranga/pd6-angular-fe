/**
 * Created by Amila on 6/20/2017.
 */
import { RouterModule } from '@angular/router';
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
 * routes registering
 */
import { AppRoutes } from '../../Routes/app.routes.definition';

/*
 * service registering
 */
import { PensionersInformationService } from '../../Services/PensionersInformationServices/app.pensioners.information.service';
import { ToastMessagesService } from '../../Services/app.toast.messages.service';
import { BankInformations } from '../../Services/BankInformationService/app.bank.information.service';

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
    NgbModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    PensionersInformationService,
    ToastMessagesService,
    BankInformations
  ],
  bootstrap: [],
  exports: [
    StepperComponent,
    PersonalInformationComponent,
    ServiceInformationComponent,
    BankInformationComponent,
    SalaryRevisionInformationComponent,
    PaymentInformationComponent
  ]
})
export class SinglePensionInformationModule { }
