/**
 * Created by Amila on 6/22/2017.
 */
import { Component } from '@angular/core';
import { LoginService } from '../../Services/app.login.service';
import {Router} from '@angular/router';
import store from '../../Models/app.modeldata.store.main';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.component.html',
  styleUrls: ['./app.login.component.css']
})
export class LoginComponent {
  username: String;
  password: String;

  constructor(private serviceApi: LoginService, private router: Router) {
    this.password = null;
    this.username = null;
  }

  loginToSystem() {
    const loginInstance = {
      'username': this.username,
      'password': this.password
    };
    if (loginInstance.username != null && loginInstance.password != null) {
      this.serviceApi.loginToRevisionSystem(loginInstance, (resultRev, errRev) => {
        if (resultRev !== null && resultRev.status === 200) {
          this.serviceApi.loginToLiveSystem(loginInstance, (resultLive, errLive) => {
            if (resultLive !== null && resultLive.status === 200) {
              store.EmployeeAuth.setUsername(resultLive.data.username);
              store.EmployeeAuth.setToken(resultLive.data.sessionId);
              store.EmployeeAuth.setUserRole(resultLive.data.role);
              localStorage.setItem('token', resultLive.data.sessionId);
              localStorage.setItem('userName', resultLive.data.username);
              this.router.navigateByUrl('/dashboard');
            } else if (errLive.response.status === 401) {
              alert('invalid attempt to live api login, please try again');
            }
          });
        } else if (errRev.response.status === 401) {
          alert('invalid attempt to revision api login, please try again');
        }
      });
    }
  }
}
