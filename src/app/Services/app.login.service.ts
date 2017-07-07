/**
 * Created by Amila on 7/4/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { BaseService } from './app.base.service';

@Injectable()
export class LoginService {
  constructor(private baseService: BaseService) {

  }

  public loginToSystem(loginInstance, callback) {
    if (loginInstance != null) {
      this.baseService.post('users/authenticate', 'revisionApi', loginInstance, (result, err) => {
        return callback(result, err);
      });
    }
  }
}
