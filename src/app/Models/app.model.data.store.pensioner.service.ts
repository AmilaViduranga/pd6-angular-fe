/**
 * Created by Amila on 7/12/2017.
 */
import { action, computed, observable } from 'mobx';
import {isNullOrUndefined, isUndefined} from "util";

export default class PensionerServiceInfoModel {
  @observable days: number;
  @observable months: number;
  @observable years: number;
}
