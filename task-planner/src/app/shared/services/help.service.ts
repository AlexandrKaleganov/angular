import {Injectable} from '@angular/core';
import {Task} from "../model/task.model";

@Injectable({
  providedIn: 'root'
})
export class HelpService {
taskResolve: Task[];
  constructor() {
  }

  initTaskModel(taskList: Task[]) {
    taskList.push(
      new Task(
        0,
        'task1',
        'category1',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
        'Завершена'
      ),
      new Task(1,
        'task2',
        'category2',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
      ),
      new Task(2,
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
      new Task(3,
        'task5',
        'category5',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
        'Завершена'),
      new Task(4,
        'task6',
        'category6',
        '2020-06-05T22:15',
        '2020-06-06T22:15',
      ));
    this.taskResolve = taskList;
  }

}
