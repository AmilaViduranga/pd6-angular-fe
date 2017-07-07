/**
 * Created by Amila on 6/28/2017.
 */
import {Component} from '@angular/core';
@Component({
  selector: 'app-payment-info',
  templateUrl: './app.payment.information.component.html',
  styleUrls: ['./app.payment.information.component.css']
})

export class PaymentInformationComponent {
  serviceInfo: any[];
  pensionEntitlement: any[];
  constructor() {
     this.serviceInfo = [
      {
        title: 'Presentage entitled if the service period is 25 years or more',
        afterUnReduced: null,
        presentUnreduced: null,
        afterReduced: null,
        presentReduced: null
      },
      {
        title: 'Presentage entitled for 25 years service if the service period is less than 25 years',
        afterUnReduced: null,
        presentUnreduced: null,
        afterReduced: null,
        presentReduced: null
      },
      {
        title: 'If the service period is less than 25 years, the deductable presentage at 1% for evevry 6 month or for each period' +
        'less than that (not necessary in the event of more than 25 years)',
        afterUnReduced: null,
        presentUnreduced: null,
        afterReduced: null,
        presentReduced: null
      },
      {
        title: 'The deductable presentage at 0.2% for one month of no pay or for each period less than that (Circular 9/96)',
        afterUnReduced: null,
        presentUnreduced: null,
        afterReduced: null,
        presentReduced: null
      },
      {
        title: 'The net presentage to be calculated for the Officer after above adjustments',
        afterUnReduced: null,
        presentUnreduced: null,
        afterReduced: null,
        presentReduced: null
      }
    ];
     this.pensionEntitlement = [
       {
         title: 'present',
         reduced: null,
         unreduced: null
       },
       {
         title: 'After Revision',
         reduced: null,
         unreduced: null
       },
       {
         title: 'At 2020',
         reduced: null,
         unreduced: null
       }
     ]
  }
}
