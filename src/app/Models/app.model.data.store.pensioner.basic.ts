/**
 * Created by Amila on 7/12/2017.
 */
import { action, computed, observable } from 'mobx';
import { isNullOrUndefined, isUndefined } from "util";
import PensionerServiceInfoModel from './app.model.data.store.pensioner.service';

export default class PensionserBaseInfoModel {
  @observable dateOfRetired: string;
  @observable designation: string;
  @observable grade: string;
  @observable id: number;
  @observable mobile: string;
  @observable name: string;
  @observable nextIncrementDate: string;
  @observable nic: string;
  @observable pensioner_type: string;
  @observable prefName: string;
  @observable wOPNumber: string;
  @observable servicePeriod: PensionerServiceInfoModel;
  @observable pensionNumber: string;
}
