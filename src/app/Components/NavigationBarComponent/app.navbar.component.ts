/**
 * Created by Amila on 6/20/2017.
 */
import { Component } from '@angular/core';
import { ToastMessagesService } from '../../Services/app.toast.messages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app.navbar.component.html',
  styleUrls: ['./app.navbar.component.css']
})
export class NavBarComponent {
  constructor(private toastService: ToastMessagesService) {

  }

  notDeveloped() {
    this.toastService.errorMessage('Not Developed', 'This content will come soon after developed');
  }
}
