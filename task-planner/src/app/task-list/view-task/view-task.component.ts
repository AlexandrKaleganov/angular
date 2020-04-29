import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {Task} from 'src/app/shared/model/task.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  task: Task;
  routeLink: ActivatedRoute;
  router: Router;
  constructor(routeLink: ActivatedRoute, router: Router) {
    routeLink.data.subscribe(({task}) => {
    this.task = task;
    console.log(this.task);
    });
    this.routeLink = routeLink;
this.router = router;
  }

  ngOnInit(): void {
  }
  canceled() {
   window.history.back();
  }
}
