import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TaskListComponent} from './task-list/task-list.component';
import {NoteListComponent} from './note-list/note-list.component';
import {TaskResolverService} from './task-list/task-resolver.service';
import {ViewTaskComponent} from './task-list/view-task/view-task.component';
import {AuthGuardService} from './core/guard/auth-guard.service';
import {GuestGuardService} from './core/guard/guest-guard.service';


const routes: Routes = [
  {
    path: '', redirectTo: 'taskList', pathMatch: "full",
    canActivate: [AuthGuardService]
  },
  {
    path: 'noteList', component: NoteListComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'taskList',
    canActivate: [AuthGuardService],
    data: {permission: 'Tasks'},
    children: [
      {path: '', component: TaskListComponent},
      {
        path: ':id/view',
        resolve: {
          task: TaskResolverService
        },
        component: ViewTaskComponent, data: {someData: 'someValue'}
      }]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
