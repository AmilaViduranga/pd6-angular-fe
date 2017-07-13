/**
 * Created by Amila on 7/4/2017.
 */
/**
 * Created by Amila on 4/18/2017.
 */
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerAddresses {
  liveApi: String;
  revisionApi: String;

  constructor() {
    this.liveApi = 'http://sathkara.pensions.gov.lk:8080/pms_dev/api/';
    //this.liveApi = 'http://192.168.102.133:8080/pensions_api/api/';
    this.revisionApi = 'http://sathkara.pensions.gov.lk:8080/revision_be/api/';
  }
}
