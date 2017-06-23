/**
 * Created by Amila on 6/21/2017.
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-location-navigation',
  templateUrl: './app.locationNavigator.component.html',
  styleUrls: ['./app.locationNavigator.component.css']
})
export class LocationNavigatorComponent {
  @Input() title;
  @Input() description;
  @Input() url;
  @Input() urlinfo;
  @Input() imageUrl;
}
