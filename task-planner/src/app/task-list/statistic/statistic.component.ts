import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  taskAll = 15;       // Всего задачь
  taskPlanned = 5;    // Запланированно
  taskOverdue = 5;   // Просрочено
  taskFinished = 5;  // Выполненно

  constructor() {
  }

  ngOnInit(): void {
  }

}
