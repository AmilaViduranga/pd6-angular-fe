/**
 * Created by Amila on 6/22/2017.
 */
import { Component } from '@angular/core';
import { PensionersInformationService } from '../../../Services/PensionersInformationServices/app.pensioners.information.service';
import PensionserBaseInfoModel from '../../../Models/app.model.data.store.pensioner.basic';
import PensionerServiceInfoModel from '../../../Models/app.model.data.store.pensioner.service';
import store from '../../../Models/app.modeldata.store.main';

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
  pensionerInstance: PensionserBaseInfoModel;
  pensionersList: Array<PensionserBaseInfoModel>;
  store: any;
  pendingApplications: any;

  constructor(service: PensionersInformationService) {
    this.pensionersList = new Array<PensionserBaseInfoModel>();
    this.service = service;
    this.store = store;
    if (store.pendingApplications == null || store.pendingApplications.length === 0) {
      this.service.getPendingInformation((result, error) => {
        if (result != null) {
          result.pensioners.forEach(pensioner => {
            this.pensionerInstance = new PensionserBaseInfoModel();
            this.pensionerInstance.servicePeriod = new PensionerServiceInfoModel();
            this.pensionerInstance.dateOfRetired = pensioner.dateOfRetired;
            this.pensionerInstance.designation = pensioner.designation;
            this.pensionerInstance.grade = pensioner.grade;
            this.pensionerInstance.id = pensioner.id;
            this.pensionerInstance.mobile = pensioner.mobileNumber;
            this.pensionerInstance.name = pensioner.name;
            this.pensionerInstance.nextIncrementDate = pensioner.nextIncrementDate;
            this.pensionerInstance.nic = pensioner.nic;
            this.pensionerInstance.pensioner_type = pensioner.pensionerType;
            this.pensionerInstance.prefName = pensioner.prefName;
            this.pensionerInstance.servicePeriod.days = pensioner.servicePeriod.days;
            this.pensionerInstance.servicePeriod.months = pensioner.servicePeriod.months;
            this.pensionerInstance.servicePeriod.years = pensioner.servicePeriod.years;
            this.pensionerInstance.wOPNumber = pensioner.wOPNumber;
            this.pensionersList.push(this.pensionerInstance);
          });
          this.store.pendingApplications = this.pensionersList;
        }
        if (error != null) {
         console.log(error);
        }
        this.pendingApplications = this.store.pendingApplications;
      });
    }
  }
}
