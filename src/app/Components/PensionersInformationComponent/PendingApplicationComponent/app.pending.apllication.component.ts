/**
 * Created by Amila on 6/22/2017.
 */
import { Component } from '@angular/core';
import { PensionersInformationService } from '../../../Services/PensionersInformationServices/app.pensioners.information.service';

@Component({
  selector: 'app-pending-application',
  templateUrl: './app.pending.apllication.component.html',
  styleUrls: ['./app.pending.apllication.component.css'],
  providers: [
    PensionersInformationService
  ]
})
export class PendingApplicationPensionersComponent {
  service: PensionersInformationService;
  constructor(service: PensionersInformationService) {
    this.service = service;
    this.service.getPendingInformation();
  }
}
