import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskGroupComponent } from './components/task-group/task-group.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskGroupComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    TaskGroupComponent,
    NewTaskComponent
  ]
})
export class TaskModule { }
