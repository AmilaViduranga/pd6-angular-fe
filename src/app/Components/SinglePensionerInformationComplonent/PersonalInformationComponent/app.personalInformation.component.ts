/**
 * Created by Amila on 6/20/2017.
 */
import { Component, Host } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { PensionersInformationService } from '../../../Services/PensionersInformationServices/app.pensioners.information.service';
import MockPensioners from '../../../Models/MockObjectStore/app.mock.pensioners';
import { ToastMessagesService } from '../../../Services/app.toast.messages.service';
import { DatePipe } from '@angular/common';

import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-personal',
  templateUrl: './app.personalInformation.component.html',
  styleUrls: ['./app.personalInformation.component.css']
})
export class PersonalInformationComponent {
  pensioner: any;
  constructor(private activatedRoute: ActivatedRoute, private service: PensionersInformationService, private toastMessageService:ToastMessagesService) {
    this.pensioner = new MockPensioners();
    this.loadDetails(this.activatedRoute).subscribe(res => {
      this.service.getPensioner(res).then(result => {
        this.pensioner = result;
      });
    });
  }

  loadDetails(activatedRoute) {
    return Observable.create(function (observer) {
      activatedRoute.parent.params.subscribe((params: Params) => {
        observer.next(params['pensionnumber']);
        observer.complete();
      });
    });
  }

  editData() {
    this.toastMessageService.successMessage('Saved Data', 'Successfully saved personal information');
  }
}
