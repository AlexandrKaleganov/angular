import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from '../../shared/model/task.model';
import {STATUS_EXPIRED, STATUS_FINISH, STATUS_PLAN} from '../../shared/constant/status.constants';
import {RestService} from '../../shared/services/rest.service';
import {CATEGORY_1, CATEGORY_2, CATEGORY_3} from '../../shared/constant/category.constants';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  statusList: string[] = [STATUS_PLAN, STATUS_EXPIRED, STATUS_FINISH];
  categoryList: string[] = [CATEGORY_1, CATEGORY_2, CATEGORY_3];
  task: Task = new Task();
  restService: RestService;

  constructor(restService: RestService) {
    this.restService = restService;
  }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.task);
    this.restService.updateDate(this.task);
    this.task = new Task();
  }
}
