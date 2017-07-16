/**
 * Created by Amila on 7/4/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from '../app.base.service';
import PensionserBaseInfoModel from '../../Models/app.model.data.store.pensioner.basic';
import PensionerService from '../../Models/app.model.data.store.pensioner.service';

@Injectable()
export class PensionersInformationService {
  dummyPensionersList: Array<PensionserBaseInfoModel>;
  constructor(private baseService: BaseService) {
    this.generateDummyList();
  }

  getPendingInformation(callback) {
    this.baseService.get('pensioners', 'liveApi', { state: 'pending'}, (result, error) => {
      return callback(result, error);
    });
  }

  getAllPensionerList() {
    return new Promise((resolve, reject) => {
      resolve(this.dummyPensionersList);
    });
  }

  generateDummyList() {
    this.dummyPensionersList = new Array<PensionserBaseInfoModel>();
    const pensionerOne = new PensionserBaseInfoModel();
    const pensionerTwo = new PensionserBaseInfoModel();
    const pensionerServiceOne = new PensionerService();
    const pensionerServiceTwo = new PensionerService();

    pensionerOne.name = 'Amila Viduranga Welikala';
    pensionerOne.mobile = '0774376478';
    pensionerOne.wOPNumber = 'WO/1234';
    pensionerOne.nic = '921940300V';
    pensionerOne.prefName = 'A.V.Welikala';
    pensionerServiceOne.years = 5;
    pensionerServiceOne.months = 4;
    pensionerServiceOne.days = 24;
    pensionerOne.servicePeriod = pensionerServiceOne;
    pensionerOne.pensioner_type = 'typeOne';
    pensionerOne.grade = 'A';
    pensionerOne.id = 1;
    pensionerOne.pensionNumber = 'P001';
    pensionerOne.nextIncrementDate = '25/10/2017';

    pensionerTwo.name = 'Dinesh Gunawardane';
    pensionerTwo.mobile = '0774376778';
    pensionerTwo.wOPNumber = 'WO/1243';
    pensionerTwo.nic = '891940300V';
    pensionerTwo.prefName = 'P.K.D.Gunawardane';
    pensionerServiceTwo.years = 8;
    pensionerServiceTwo.months = 4;
    pensionerServiceTwo.days = 24;
    pensionerTwo.servicePeriod = pensionerServiceTwo;
    pensionerTwo.pensioner_type = 'typeOne';
    pensionerTwo.grade = 'A';
    pensionerTwo.id = 2;
    pensionerTwo.pensionNumber = 'P002';
    pensionerTwo.nextIncrementDate = '25/10/2017';

    this.dummyPensionersList.push(pensionerOne);
    this.dummyPensionersList.push(pensionerTwo);
  }
}
