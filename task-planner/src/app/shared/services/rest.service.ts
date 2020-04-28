import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Task} from '../model/task.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private dataSource = new Subject();
  private map = new Subject<Map<any, any>>();
  dataUpdate$ = this.dataSource.asObservable();
  map$ = this.map.asObservable();

  updateDate(data: Task) {
    this.dataSource.next(data);
  }

  editTask(map) {
    this.map.next(map);
  }

  constructor() {
  }
}
