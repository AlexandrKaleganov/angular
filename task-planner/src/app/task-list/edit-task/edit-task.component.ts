import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { STATUS_EXPIRED, STATUS_FINISH, STATUS_PLAN } from '../../shared/constant/status.constants';
import { Task } from '../../shared/model/task.model';
import { CATEGORY_1, CATEGORY_2, CATEGORY_3 } from '../../shared/constant/category.constants';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  statusList: string[] = [STATUS_PLAN, STATUS_EXPIRED, STATUS_FINISH];
  categoryList: string[] = [CATEGORY_1, CATEGORY_2, CATEGORY_3];
  @Input() task: Task;
  @Output() editEmitter = new EventEmitter<Task>();
  @Output() canceledEmitter = new EventEmitter<Task>();

  constructor() {
  }

  ngOnInit(): void {
  }

  canceled() {
    this.canceledEmitter.emit();
    this.task = undefined;
  }

  editTask() {
    this.editEmitter.emit(this.task);
    this.task = undefined;
  }
}
