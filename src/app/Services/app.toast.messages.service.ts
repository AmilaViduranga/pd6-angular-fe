/**
 * Created by Amila on 7/15/2017.
 * this is the common place that handle all the message displaying thing
 * <simple-notifications></<simple-notifications> tag should be on consumer page
 * for more details follow this link
 * https://github.com/flauc/angular2-notifications/blob/master/docs/toastNotifications.md
 */
import { NotificationsService } from 'angular2-notifications';
import { Injectable } from '@angular/core';

@Injectable()
export class ToastMessagesService {
  constructor(private toastMessagesService: NotificationsService) {

  }
  /*
   * successfull message
   */
  successMessage(title, message) {
    return this.toastMessagesService.success(
      title,
      message,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 100
      }
    );
  }

  /*
   * error message
   */
  errorMessage(title, message) {
    return this.toastMessagesService.error(
      title,
      message,
      {
        timeOut: 5000,
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: false,
        maxLength: 100
      }
    );
  }
}
