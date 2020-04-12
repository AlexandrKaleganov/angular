import { Moment } from 'moment';
import {  STATUS_PLAN } from '../constant/status.constants';

export class Task {
  constructor(
    public id?: number,
    public name?: string,
    public category?: string,
    public dateStart?: Moment,
    public dateEnd?: Moment,
    public status: string = STATUS_PLAN
  ) {

  }
}
