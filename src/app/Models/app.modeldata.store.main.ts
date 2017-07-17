/**
 * Created by Amila on 7/11/2017.
 */
import {action, computed, observable} from 'mobx';
import validate from 'mobx-form-validate';
import EmployeeAuthModel from './app.model.data.store.authInfo';
import PensionserBaseInfoModel from './app.model.data.store.pensioner.basic';
import Bank from './AppStateInformations/app.model.bank';

class Store {
  @observable EmployeeAuth: EmployeeAuthModel;
  @observable pendingApplications: Array <PensionserBaseInfoModel>;
  @observable bankList: Array<Bank>;
  constructor() {
    this.EmployeeAuth = new EmployeeAuthModel();
    this.pendingApplications = new Array<PensionserBaseInfoModel>();
    this.bankList = new Array<Bank>();
  }
}

const store = new Store();
export default store;
