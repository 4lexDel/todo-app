import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './components/task/task.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskGroupComponent } from './components/task-group/task-group.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { CoreModule } from '../core/core.module';
import { ExampleComponent } from './components/example/example.component';
import { SingleTaskListComponent } from './components/single-task-list/single-task-list.component';
import { UpdateTaskComponent } from './components/update-task/update-task.component';
import { NewTaskListComponent } from './components/new-task-list/new-task-list.component';
import { UpdateTaskListComponent } from './components/update-task-list/update-task-list.component';

import { ColorPickerModule } from "primeng/colorpicker";


@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskGroupComponent,
    NewTaskComponent,
    ExampleComponent,
    SingleTaskListComponent,
    UpdateTaskComponent,
    NewTaskListComponent,
    UpdateTaskListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CoreModule,
    ColorPickerModule,
    FormsModule
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    TaskGroupComponent,
    NewTaskComponent,
    ExampleComponent,
    SingleTaskListComponent,
    UpdateTaskComponent,
    NewTaskListComponent,
    UpdateTaskListComponent
  ]
})
export class TaskModule { }
