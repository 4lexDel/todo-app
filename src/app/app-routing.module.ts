import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { ProfileComponent } from './auth/components/profile/profile.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LandingPageComponent } from './landing-page/components/landing-page/landing-page.component';
import { ExampleComponent } from './task/components/example/example.component';
import { NewTaskListComponent } from './task/components/new-task-list/new-task-list.component';
import { NewTaskComponent } from './task/components/new-task/new-task.component';
import { SingleTaskListComponent } from './task/components/single-task-list/single-task-list.component';
import { TaskGroupComponent } from './task/components/task-group/task-group.component';
import { UpdateTaskListComponent } from './task/components/update-task-list/update-task-list.component';
import { UpdateTaskComponent } from './task/components/update-task/update-task.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent, canActivate: [AuthGuard] },
  { path: 'todo', component: TaskGroupComponent, canActivate: [AuthGuard] },
  { path: 'todo/examples', component: ExampleComponent, canActivate: [AuthGuard] },

  { path: 'todo/add-task-list', component: NewTaskListComponent, canActivate: [AuthGuard] },
  { path: 'todo/add-task/:idTasklist', component: NewTaskComponent, canActivate: [AuthGuard] },

  { path: 'todo/update-task-list/:idTaskList', component: UpdateTaskListComponent, canActivate: [AuthGuard] },
  { path: 'todo/update-task/:idTaskList/:idTask', component: UpdateTaskComponent, canActivate: [AuthGuard] },

  { path: 'todo/:id', component: SingleTaskListComponent, canActivate: [AuthGuard] },
  
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'auth/profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
