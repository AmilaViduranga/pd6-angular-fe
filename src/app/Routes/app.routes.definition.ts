/**
 * Created by Amila on 6/20/2017.
 */
import { Routes } from '@angular/router';
import { DashboardComponent } from '../Components/DashBoardComponent/app.dashboard.component';
import { LoginComponent } from '../Components/LoginComponent/app.login.component';
import { PendingApplicationPensionersComponent } from '../Components/PensionersInformationComponent/PendingApplicationComponent/app.pending.apllication.component';
import { RejectedApplicationPensionersComponent } from '../Components/PensionersInformationComponent/RegectedApplicationComponent/app.rejected.application.component';
import { SubmittedApplicationPensionersComponent } from '../Components/PensionersInformationComponent/SubmittedApplicationComponent/app.submited.application.component';
import { AwardApplicationPensionersComponent } from '../Components/PensionersInformationComponent/PendingAwardApplicationComponent/app.pending.award.component';
import { PersonalInformationComponent } from '../Components/SinglePensionerInformationComplonent/PersonalInformationComponent/app.personalInformation.component';
import { StepperComponent } from '../Components/SinglePensionerInformationComplonent/StepperComponent/app.stepper.component';
import { PensionersSearchComponent } from '../Components/PensionersInformationComponent/PensionersSearchComponent/app.pensioners.search.component';
import { ServiceInformationComponent } from '../Components/SinglePensionerInformationComplonent/ServiceInformationComponent/app.service.information.component';
import { BankInformationComponent } from '../Components/SinglePensionerInformationComplonent/BankInformationComponent/app.bank.information.component';
import { SalaryRevisionInformationComponent } from '../Components/SinglePensionerInformationComplonent/SalaryRevisionInformationComponent/app.salary.revision.information.component';
import { PaymentInformationComponent  } from '../Components/SinglePensionerInformationComplonent/PaymentInformationComponent/app.payment.information.component';
export const AppRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'pensionersInformation/pending',
    component: PendingApplicationPensionersComponent
  },
  {
    path: 'pensionersInformation/rejected',
    component: RejectedApplicationPensionersComponent
  },
  {
    path: 'pensionersInformation/submited',
    component: SubmittedApplicationPensionersComponent
  },
  {
    path: 'pensionersInformation/awarded',
    component: AwardApplicationPensionersComponent
  },
  {
    path: 'singleInformation',
    component: PensionersSearchComponent
  },
  {
    path: 'revision/modify/:pensionnumber',
    component: StepperComponent,
    children: [
      {
        path: 'persion',
        component: PersonalInformationComponent
      },
      {
        path: 'bank',
        component: BankInformationComponent
      },
      {
        path: 'service',
        component: ServiceInformationComponent
      },
      {
        path: 'salary',
        component: SalaryRevisionInformationComponent
      },
      {
        path: 'payment',
        component: PaymentInformationComponent
      },
      {
        path: '',
        redirectTo: 'persion',
        pathMatch: 'full'
      }
    ]
  }
]
