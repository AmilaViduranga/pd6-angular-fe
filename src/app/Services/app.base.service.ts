/**
 * Created by Amila on 7/4/2017.
 */
import Axios from 'axios';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ServerAddresses } from '../Models/app.model.data.serverAddresses';
import store from '../Models/app.modeldata.store.main';

@Injectable()
export class BaseService {
  private axios: any;
  private headers: Headers;
  private liveApi: String;
  private revisionApi: String;
  private requestedServerType: String;
  private paramList: String;

  constructor(private serverAddresses: ServerAddresses) {
    this.axios = Axios;
    this.liveApi = serverAddresses.liveApi;
    this.revisionApi = serverAddresses.revisionApi;
    this.requestedServerType = null;
    this.headers = new Headers();
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Accept', 'application/json');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, x-xsrf-token');
  }

  /*
   * handle base get url
   */
  get(path, serverAddressType, params, callback) {
    this.validatePath(serverAddressType, dataReturened => {
      if (dataReturened && this.requestedServerType != null) {
        path = this.requestedServerType + path;
        this.axios.get(path, {
            params: params,
            headers: {
              'session-key': store.EmployeeAuth.getToken
            }
          })
          .then(response => {
            return callback(response.data, null);
          })
          .catch(err => {
            return callback(null, err);
          });
      }
    });
  }

  /*
   * handle base post request
   */
  post(path, serverAddressType, data, callback) {
    this.validatePath(serverAddressType, dataReturned => {
      if (dataReturned && this.requestedServerType != null) {
        path = this.requestedServerType + path;
        this.axios.post(path, data)
          .then(response => {
            return callback(response, null);
          })
          .catch(err => {
            return callback(null, err);
          });
      }
    });
  }

  /*
   * validate the server address path either live server or revision server
   */
  private validatePath(serverAddressType, callback) {
    if (serverAddressType === 'liveApi') {
      this.requestedServerType = this.liveApi;
      return callback(true);
    } else if (serverAddressType === 'revisionApi') {
      this.requestedServerType = this.revisionApi;
      return callback(true);
    }
    return callback(false);
  }
}
