import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
 taskModels: any = [];
  constructor() { }

  ngOnInit(): void {
    this.initTaskModel();
  }
  initTaskModel() {
    this.taskModels.push(
      {id:'1', name:'task1', category: 'category1', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Завершена'},
      {id:'2', name:'task2', category: 'category2', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Запланирована'},
      {id:'3', name:'task3', category: 'category3', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Просрочена'},
      {id:'4', name:'task4', category: 'category4', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Запланирована'},
      {id:'5', name:'task5', category: 'category5', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Завершена'},
      {id:'6', name:'task6', category: 'category6', dateStart:'22:15 05.06.2020', dateEnd:'22:15 06.06.2020', status:'Завершена'});
  }
  addTask() {
    console.log('add Task');
  }

  setStatus(object: any) {
    object.status = !object.status;
  }
  filterTasks($event) {
    console.log($event.target.checked);
  }

  deleteTask(tas: any) {
    this.taskModels = this.taskModels.filter(task => task.id !== tas.id);
  }

  getTaskListsSize() {
    return this.taskModels?.length;
  }
  getTasksAmountByStatus(status: string) {
    return this.taskModels.filter(task => task.status === status)?.length;

}
}
