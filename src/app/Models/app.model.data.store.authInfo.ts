/**
 * Created by Amila on 7/11/2017.
 */
import { action, computed, observable } from 'mobx';
import {isNullOrUndefined, isUndefined} from "util";

export default class EmployeeAuthModel {
  @observable private UserName: String;
  @observable private Token: String;
  @observable private UserRole: String;

  constructor() {
    this.UserRole = null;
    this.Token = null;
    this.UserName = null;
  }

  @action setUsername(username: String) {
    this.UserName = username;
  }

  @computed get getUsername() {
    if (this.UserName == null ) {
      this.setUsername(localStorage.getItem('userName'));
    }
    return this.UserName;
  }

  @action setToken(token: String) {
    this.Token = token;
  }

  @computed get getToken() {
    if (this.Token == null) {
      this.setToken(localStorage.getItem('token'));
    }
    return this.Token;
  }

  @action setUserRole(role: String) {
    this.UserRole = role;
  }

  @computed get getUserRole() {
    return this.UserRole;
  }

  @computed get isLogin() {
    return this.Token != null;
  }
}
