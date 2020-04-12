import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from '../../shared/model/task.model';
import { STATUS_EXPIRED, STATUS_FINISH, STATUS_PLAN } from '../../shared/constant/status.constants';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  @Output() addTaskEmitter = new EventEmitter<Task>();
   statusList: string[] = [STATUS_PLAN, STATUS_EXPIRED, STATUS_FINISH];
   categoryList: string[] = ['category_1', 'category_2', 'category_3'];
   task:Task = new Task();
  constructor() {
  }

  ngOnInit(): void {
  }

  addTask() {
    console.log(this.task);
    this.addTaskEmitter.emit(this.task);
    this.task = new Task();
  }
}
