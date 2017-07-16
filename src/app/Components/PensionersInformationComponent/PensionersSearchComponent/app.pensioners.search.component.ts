/**
 * Created by Amila on 6/22/2017.
 */
import { Component, Input } from '@angular/core';
import { PensionersInformationService } from '../../../Services/PensionersInformationServices/app.pensioners.information.service';
import PensionserBaseInfoModel from '../../../Models/app.model.data.store.pensioner.basic';

@Component({
  selector: 'app-pensioners-search',
  templateUrl: './app.pensioners.search.component.html',
  styleUrls: ['./app.pensioners.search.component.css']
})
export class PensionersSearchComponent {
  pensionerList: any;
  constructor(private service: PensionersInformationService) {
    this.pensionerList = new Array<PensionserBaseInfoModel>();
    this.service.getAllPensionerList().then(res => {
      this.pensionerList = res;
    });
  }
}
