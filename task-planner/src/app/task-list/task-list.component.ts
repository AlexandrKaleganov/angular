import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/model/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskModels: Task[] = [];
  taskFilter: boolean = false;
  modifyTask: Task;

  constructor() {
  }

  ngOnInit(): void {
    this.initTaskModel();
  }

  initTaskModel() {
    this.taskModels.push(
      new Task(
        1,
        'task1',
        'category1',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
        'Завершена'
      ),
      new Task(2,
        'task2',
        'category2',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
      ),
      new Task(3,
        'task3',
        'category3',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
        'Просрочена'),
      new Task(4,
        'task4',
        'category4',
        '2020-06-05T22:15',
        '2020-06-06T22:15'),
      new Task(5,
        'task5',
        'category5',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
        'Завершена'),
      new Task(6,
        'task6',
        'category6',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
      ));
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
    for (let i = 0; i <this.taskModels.length ; i++) {
      if (this.taskModels[i].id === task.id){
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

  getTasksAmountByStatus(status: string) {
    return this.taskModels.filter(task => task.status === status)?.length;
  }
}
