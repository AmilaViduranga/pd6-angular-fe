/**
 * Created by Amila on 7/4/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from './app.base.service';
import MockService from './MockService/app.mock.service';

@Injectable()
export class LoginService {
  mockInstance: MockService;
  constructor(private baseService: BaseService) {
    this.mockInstance = new MockService();
  }
 /*
  * login to the revision service
  */
  public loginToRevisionSystem(loginInstance, callback) {
    if (loginInstance != null) {
      this.baseService.post('users/authenticate', 'revisionApi', loginInstance, (result, err) => {
        return callback(result, err);
      });
    }
  }

  /*
   * login to the live to system, have to modify this service
   */
  public loginToLiveSystem(loginInstance) {
    if (loginInstance != null) {
      // this.baseService.post('employees/authenticate/login', 'liveApi', loginInstance, (result, err) => {
      //   return callback(result, err);
      // });
      return new Promise((resolve, reject) => {
        this.mockInstance.loginToSystem(loginInstance).then(result => {
          return resolve(result);
        }, error => {
          return reject(error);
        });
      });
    }
  }
}
