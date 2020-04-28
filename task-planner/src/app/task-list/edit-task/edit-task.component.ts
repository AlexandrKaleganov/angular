import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {STATUS_EXPIRED, STATUS_FINISH, STATUS_PLAN} from '../../shared/constant/status.constants';
import {Task} from '../../shared/model/task.model';
import {CATEGORY_1, CATEGORY_2, CATEGORY_3} from '../../shared/constant/category.constants';
import {RestService} from '../../shared/services/rest.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  statusList: string[] = [STATUS_PLAN, STATUS_EXPIRED, STATUS_FINISH];
  categoryList: string[] = [CATEGORY_1, CATEGORY_2, CATEGORY_3];
  restService: RestService;
  @Input() task: Task;
  @Output() editEmitter = new EventEmitter<Task>();
  @Output() canceledEmitter = new EventEmitter<Task>();
  @Output() submitErrorMessage = new EventEmitter<string>();

  constructor(restService: RestService) {
    this.restService = restService;
  }

  canceled() {
    this.restService.editTask(new Map().set('cancelEdit', 'cancelEdit'))
  }

  editTask() {
    this.restService.editTask(new Map().set('editTask', this.task));
  }

  ngOnInit(): void {
    console.log(`onInit`);
  }

  ngOnChanges(): void {
    console.log(`onChanges`);
    console.log(this.task);
    if (this.task.status === STATUS_FINISH) {
      this.restService.editTask(new Map().set('errorMessage', 'Выполненную задачу нельзя отредактировать'));
    }
  }

  ngOnDestroy(): void {
    console.log(`onDestroy`);
  }

  ngAfterViewInit(): void {
  }
}
