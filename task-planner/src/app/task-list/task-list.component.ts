import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
private taskName: string;
private taskCategory: string;
private dateStart: string;
private dateEnd: string;
  constructor() { }

  ngOnInit(): void {
  }

}
