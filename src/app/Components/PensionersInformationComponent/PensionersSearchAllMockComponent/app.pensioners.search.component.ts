/**
 * Created by Amila on 6/22/2017.
 */
import { Component, Input } from '@angular/core';
import { PensionersInformationService } from '../../../Services/PensionersInformationServices/app.pensioners.information.service';
import MockPensioners from '../../../Models/MockObjectStore/app.mock.pensioners';

@Component({
  selector: 'app-pensioners-all-search',
  templateUrl: './app.pensioners.search.component.html',
  styleUrls: ['./app.pensioners.search.component.css']
})
export class PensionersSearchAllMockComponent {
  @Input() state: any;
  pensionerList: any;
  constructor(private service: PensionersInformationService) {
    this.pensionerList = new Array<MockPensioners>();
    this.service.getAllPensionerList().then(res => {
      this.pensionerList = res;
      this.pensionerList.forEach(pensioner => {
        if (pensioner.state === 'pending') {
          pensioner.state = 1;
        }
        if (pensioner.state === 'rejected') {
          pensioner.state = 2;
        }
        if (pensioner.state === 'submitted') {
          pensioner.state = 3;
        }
        if (pensioner.state === 'awarded') {
          pensioner.state = 4;
        }
      });
    });
  }
}
