/**
 * Created by Amila on 6/22/2017.
 */
import { Component } from '@angular/core';
import { LoginService } from '../../Services/app.login.service';
import {Router} from '@angular/router';

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
      this.serviceApi.loginToSystem(loginInstance, (result, err) => {
        if (result.status === 200) {
          this.router.navigateByUrl('/dashboard');
        } else {
          alert('invalid attempt, please try again');
        }
      });
    }
  }
}
