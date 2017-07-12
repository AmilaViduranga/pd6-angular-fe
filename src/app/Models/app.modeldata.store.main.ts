/**
 * Created by Amila on 7/11/2017.
 */
import {action, computed, observable} from 'mobx';
import validate from 'mobx-form-validate';
import EmployeeAuthModel from './app.model.data.store.authInfo';

class Store {
  @observable EmployeeAuth: EmployeeAuthModel;

  constructor() {
    this.EmployeeAuth = new EmployeeAuthModel();
  }
}

const store = new Store();
export default store;
