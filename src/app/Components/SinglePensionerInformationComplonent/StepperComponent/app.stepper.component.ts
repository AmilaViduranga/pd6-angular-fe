/**
 * Created by Amila on 6/23/2017.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './app.stepper.component.html',
  styleUrls: ['./app.stepper.component.css']
})
export class StepperComponent {
  /*
   * load the tab content after user select them
   */
  loadContent(contentId, indexId) {
    let contents: any;
    contents = document.getElementsByClassName('infoContents');
    for (let i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }
    document.getElementById(contentId).style.display = 'block';
  }
}
