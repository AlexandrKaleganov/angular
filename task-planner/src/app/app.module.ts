import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StatisticComponent } from './task-list/statistic/statistic.component';
import { TaskAddComponent } from './task-list/task-add/task-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { LodDirective } from './shared/directive/lod.directive';
import { DateInputDirective } from './shared/directive/date-input.directive';
import { MyTitleCasePipe } from './shared/pipe/my-title-case.pipe';
import { NoteListComponent } from './note-list/note-list.component';
import {RouterModule, Routes} from '@angular/router';
const routes:Routes = [
  {path:'', redirectTo:'taskList', pathMatch:"full"},
  {path:'taskList', component: TaskListComponent},
  {path: 'noteList', component: NoteListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaskListComponent,
    StatisticComponent,
    TaskAddComponent,
    EditTaskComponent,
    LodDirective,
    DateInputDirective,
    MyTitleCasePipe,
    NoteListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
