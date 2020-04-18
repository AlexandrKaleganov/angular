import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import {STATUS_EXPIRED, STATUS_FINISH, STATUS_PLAN} from '../../shared/constant/status.constants';
import {Task} from '../../shared/model/task.model';
import {CATEGORY_1, CATEGORY_2, CATEGORY_3} from '../../shared/constant/category.constants';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  statusList: string[] = [STATUS_PLAN, STATUS_EXPIRED, STATUS_FINISH];
  categoryList: string[] = [CATEGORY_1, CATEGORY_2, CATEGORY_3];
  @Input() task: Task;
  @Output() editEmitter = new EventEmitter<Task>();
  @Output() canceledEmitter = new EventEmitter<Task>();
  @Output() submitErrorMessage = new EventEmitter<string>();

  constructor() {
  }

  canceled() {
    this.canceledEmitter.emit();
    this.task = undefined;
  }

  editTask() {
    this.editEmitter.emit(this.task);
  }

  ngOnInit(): void {
    if (this.task === undefined) {
      this.task = new Task();
    }
    console.log(`onInit`);
  }
  ngOnChanges(): void {
    console.log(`onChanges`);
    console.log(this.task);
    if (this.task.status === STATUS_FINISH) {
      this.submitErrorMessage.emit('Выполненную задачу нельзя отредактировать');
    }
  }
  ngOnDestroy(): void {
    console.log(`onDestroy`);
  }

  ngAfterViewInit(): void {
  }
}
