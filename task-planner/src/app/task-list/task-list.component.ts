import {Component, OnInit} from '@angular/core';
import {Task} from '../shared/model/task.model';
import {HelpService} from "../shared/services/help.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskModels: Task[] = [];
  taskFilter: boolean = false;
  modifyTask: Task;
  errorMessage: string;
  helpService: HelpService;

  constructor(helpService: HelpService) {
    this.helpService = helpService;
  }

  ngOnInit(): void {
    this.initTaskModel();
  }

  setStatus(object: any, $event) {
    if ($event.target.checked) {
      object.status = 'Завершена';
    } else {
      object.status = 'Запланирована';
    }
  }

  filterTasks($event) {
    this.taskFilter = $event.target.checked;
  }

  isViews(task: any) {
    if (this.taskFilter) {
      return task.status === 'Завершена';
    } else {
      return true;
    }
  }

  deleteTask(tas: any) {
    this.taskModels = this.taskModels.filter(task => task.id !== tas.id);
  }

  /**
   * добавление или изменение таска
   * @param task
   */
  addTaskFromList(task: Task) {
    task.id = this.taskModels.length + 1;
    this.taskModels.push(task);
  }

  editTaskFromList(task: Task) {
    console.log(task.category);
    for (let i = 0; i < this.taskModels.length; i++) {
      if (this.taskModels[i].id === task.id) {
        this.taskModels[i] = task;
        break;
      }
    }
    this.modifyTask = undefined;
  }

  canceledEdit() {
    this.modifyTask = undefined;
  }

  editTask(task: Task) {
    this.modifyTask = {...task};
  }

  getTaskListsSize() {
    return this.taskModels?.length;
  }

  returnEditTask() {
    return this.modifyTask;
  }

  initMessage(message: string) {
    console.log(message);
    this.errorMessage = message;
  }

  clearMessage() {
    this.errorMessage = undefined;
  }

  getTasksAmountByStatus(status: string) {
    return this.taskModels.filter(task => task.status === status)?.length;
  }

  initTaskModel() {
    this.helpService.initTaskModel(this.taskModels);
  }
}
