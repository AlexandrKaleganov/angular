import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  @Input() taskAll;       // Всего задачь
  @Input() taskPlanned;    // Запланировано
  @Input() taskOverdue;   // Просрочено
  @Input() taskFinished;  // Выполнено

  constructor() {
  }

  ngOnInit(): void {
  }

}
