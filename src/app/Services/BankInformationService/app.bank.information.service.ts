/**
 * Created by Amila on 7/17/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from '../app.base.service';

@Injectable()
export class BankInformations {
  constructor(private baseService: BaseService) {

  }
  /*
   * get all bank informations
   */
  getAllBanks() {
    return new Promise((resolve, reject) => {
      this.baseService.get('banks', 'liveApi', null, (result, error) => {
        if (result != null) {
          return resolve(result);
        } else {
          return reject(error);
        }
      });
    });
  }

  /*
   * get the branch informations
   */
  getAllBranches(bankId) {
    return new Promise((resolve, reject) => {
      this.baseService.get('banks/' + bankId + '/branches', 'liveApi', null, (result, error) => {
        if (result != null) {
          return resolve(result);
        } else {
          return reject(error);
        }
      });
    });
  }
}
