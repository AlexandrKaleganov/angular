import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {NoteListComponent} from './note-list/note-list.component';
import {EditTaskComponent} from './task-list/edit-task/edit-task.component';
import {Task} from './shared/model/task.model';
import {TaskResolverService} from './task-list/task-resolver.service';
import {ViewTaskComponent} from './task-list/view-task/view-task.component';


const routes: Routes = [
  {path: '', redirectTo: 'taskList', pathMatch: "full"},
  {path: 'noteList', component: NoteListComponent},
  {
    path: 'taskList',
    data: {permission: 'Tasks'},
    children: [
      {path: '', component: TaskListComponent},
      {path: ':id/view',
        resolve:{
        task: TaskResolverService
        },
        component: ViewTaskComponent, data: {someData: 'someValue'}}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
