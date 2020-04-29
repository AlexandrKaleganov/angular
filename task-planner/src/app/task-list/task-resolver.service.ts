import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskListComponent} from './task-list.component';
import {HelpService} from '../shared/services/help.service';

@Injectable({providedIn: 'root'})
export class TaskResolverService implements Resolve<any>{
  taskList:HelpService;
  constructor(taskListComponent:HelpService) {
  this.taskList = taskListComponent;
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    console.log(route.data);
    let res;
    for (let i = 0; i < this.taskList.taskResolve.length; i++) {
      console.log('обход');
      console.log(route.params.id);
      if (this.taskList.taskResolve[i].id === route.data.id) {
        res = this.taskList.taskResolve[i];
        break;
      }
    }
    return this.taskList.taskResolve[route.params.id];
  }
}
