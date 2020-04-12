import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/model/task.model';
import * as moment from 'moment';
import { DATE_TIME_FORMAT } from '../shared/constant/date-time.constants';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  taskModels: Task[] = [];
  taskFilter: boolean = false;
  eventManager: EventManager;

  constructor(eventManager: EventManager) {
    this.eventManager = eventManager;
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
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT),
        'Завершена'
      ),
      new Task(2,
        'task2',
        'category2',
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT),
      ),
      new Task(3,
        'task3',
        'category3',
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT),
        'Просрочена'),
      new Task(4,
        'task4',
        'category4',
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT)),
      new Task(5,
        'task5',
        'category5',
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT),
        'Завершена'),
      new Task(6,
        'task6',
        'category6',
        moment('2020-06-05 22:15 ', DATE_TIME_FORMAT),
        moment('2020-06-06 22:15 ', DATE_TIME_FORMAT),
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
    if (task.id === undefined) {
      task.id = this.taskModels.length + 1;
      this.taskModels.push(task);
    } else {
      this.taskModels.forEach(t => {
        if (t.id === task.id) {
          t = task;
        }
      })
    }
  }

  editTask(task: Task) {
    console.log(task);
  }

  getTaskListsSize() {
    return this.taskModels?.length;
  }

  getTasksAmountByStatus(status: string) {
    return this.taskModels.filter(task => task.status === status)?.length;
  }
}
