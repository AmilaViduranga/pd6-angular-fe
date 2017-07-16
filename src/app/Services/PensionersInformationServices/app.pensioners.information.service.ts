/**
 * Created by Amila on 7/4/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from '../app.base.service';
import MockPensioners from '../../Models/MockObjectStore/app.mock.pensioners';
import {reject} from "q";

@Injectable()
export class PensionersInformationService {
  dummyPensionersList: Array<MockPensioners>;
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

  getPensioner(pensionNumber) {
    console.log(pensionNumber);
    return new Promise((resolve, reject) => {
      this.dummyPensionersList.forEach(pensioner => {
        if (pensioner.pensionNumber === pensionNumber) {
          return resolve(pensioner);
        }
      });
    });
  }

  generateDummyList() {
    this.dummyPensionersList = new Array<MockPensioners>();
    const pensionerOne = new MockPensioners();
    const pensionerTwo = new MockPensioners();
    const pensionerThree = new MockPensioners();
    const pensionerFour = new MockPensioners();
    const pensionerFive = new MockPensioners();
    const pensionerSix = new MockPensioners();
    const pensionerSeven = new MockPensioners();
    const pensionerEight = new MockPensioners();

    pensionerOne.name = 'Welikala A.V';
    pensionerOne.state = 'pending';
    pensionerOne.NIC = '921940300V';
    pensionerOne.pensionNumber = 'p001';
    pensionerOne.title = 'Mr'
    pensionerOne.nameInNic = 'Amila Viduranga Welikala';
    pensionerOne.dob = '07/12/1992';
    pensionerOne.gender = 'M';
    pensionerOne.district = 1;
    pensionerOne.dsd = 1;
    pensionerOne.gnd = 1;
    pensionerOne.addressOne = '178/5, Sahana Mawatha';
    pensionerOne.addressTwo = 'Kadawatha Road';
    pensionerOne.addressThree = 'Rahgama';
    pensionerOne.residence = '011-2960867';
    pensionerOne.mobile = '0774376478';
    pensionerOne.ministry = 'Education';
    pensionerOne.robf = 'test robf';
    pensionerOne.designation = 1;
    pensionerOne.cinp = 1;
    pensionerOne.retirementReason = 'sample reason';
    pensionerOne.dona = '2015/02/03';

    pensionerTwo.name = 'Wijemanna W.M';
    pensionerTwo.pensionNumber = 'p002';
    pensionerTwo.NIC = '921456781V';
    pensionerTwo.state = 'pending';
    pensionerTwo.title = 'Mr'
    pensionerTwo.nameInNic = 'Wimal Madusanka Wijemanna';
    pensionerTwo.dob = '1992/07/12';
    pensionerTwo.gender = 'M';
    pensionerTwo.district = 1;
    pensionerTwo.dsd = 1;
    pensionerTwo.gnd = 1;
    pensionerTwo.addressOne = '178/5, Sahana Mawatha';
    pensionerTwo.addressTwo = 'Kadawatha Road';
    pensionerTwo.addressThree = 'Rahgama';
    pensionerTwo.residence = '011-2960867';
    pensionerTwo.mobile = '0774376478';
    pensionerTwo.ministry = 'Education';
    pensionerTwo.robf = 'test robf';
    pensionerTwo.designation = 1;
    pensionerTwo.cinp = 1;
    pensionerTwo.retirementReason = 'sample reason';
    pensionerTwo.dona = '2015/02/03';

    pensionerThree.name = 'Fernando N. P';
    pensionerThree.pensionNumber = 'p003';
    pensionerThree.state = 'rejected';
    pensionerThree.NIC = '789478567V';

    pensionerFour.NIC = '784597861V';
    pensionerFour.state = 'rejected';
    pensionerFour.pensionNumber = 'p004';
    pensionerFour.name = 'Silva W.P.';

    pensionerFive.name = 'Parakrama B.L';
    pensionerFive.pensionNumber = 'p005';
    pensionerFive.state = 'submitted';
    pensionerFive.NIC = '4785123788V';

    pensionerSix.name = 'Karunarathne M.K';
    pensionerSix.NIC = '478369127v';
    pensionerSix.state = 'submitted';
    pensionerSix.pensionNumber = 'p006';

    pensionerSeven.pensionNumber = 'p007';
    pensionerSeven.state = 'submitted';
    pensionerSeven.NIC = '745789123V';
    pensionerSeven.name = 'Sumanadasa R.P';

    pensionerEight.name = 'Wickaramarachi N.P';
    pensionerEight.NIC = '478123478V';
    pensionerEight.state = 'awarded';
    pensionerEight.pensionNumber = 'p008';

    this.dummyPensionersList.push(pensionerOne);
    this.dummyPensionersList.push(pensionerTwo);
    this.dummyPensionersList.push(pensionerThree);
    this.dummyPensionersList.push(pensionerFour);
    this.dummyPensionersList.push(pensionerFive);
    this.dummyPensionersList.push(pensionerSix);
    this.dummyPensionersList.push(pensionerSeven);
    this.dummyPensionersList.push(pensionerEight);
  }
}
