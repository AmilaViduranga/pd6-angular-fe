/**
 * Created by Amila on 6/22/2017.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTableModule } from 'angular2-datatable';
/*
 * components declaration on pensioners informations
 */
import { PensionersSearchComponent } from './PensionersSearchComponent/app.pensioners.search.component';
import { PendingApplicationPensionersComponent } from './PendingApplicationComponent/app.pending.apllication.component';
import { RejectedApplicationPensionersComponent } from './RegectedApplicationComponent/app.rejected.application.component';
import { SubmittedApplicationPensionersComponent } from './SubmittedApplicationComponent/app.submited.application.component';
import { AwardApplicationPensionersComponent } from './PendingAwardApplicationComponent/app.pending.award.component';

/*
 * import data model
 */
import { ServerAddresses } from '../../Models/app.model.data.serverAddresses';

/*
 * import the services
 */
import { BaseService } from '../../Services/app.base.service';
import { PensionersInformationService } from '../../Services/PensionersInformationServices/app.pensioners.information.service';

/*
 * import filters
 */
import { PendingResultFilter } from '../PensionersInformationComponent/PendingApplicationComponent/app.pending.application.filter';
@NgModule({
  declarations: [
    PensionersSearchComponent,
    PendingApplicationPensionersComponent,
    RejectedApplicationPensionersComponent,
    SubmittedApplicationPensionersComponent,
    AwardApplicationPensionersComponent,
    PendingResultFilter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    DataTableModule
  ],
  providers: [
    ServerAddresses,
    BaseService,
    PensionersInformationService
  ],
  bootstrap: [],
  exports: [
    PendingApplicationPensionersComponent,
    RejectedApplicationPensionersComponent,
    SubmittedApplicationPensionersComponent,
    AwardApplicationPensionersComponent
  ]
})
export class PensionersInformationsModule { }
