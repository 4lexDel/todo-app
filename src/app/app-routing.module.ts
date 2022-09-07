import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { NewTaskComponent } from './task/components/new-task/new-task.component';
import { TaskGroupComponent } from './task/components/task-group/task-group.component';
import { TaskListComponent } from './task/components/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'todo', component: TaskGroupComponent },         //Provisoirement
  { path: 'todo/add', component: NewTaskComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
