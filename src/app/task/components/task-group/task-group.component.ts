import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskList } from 'src/app/core/models/task-list.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss']
})
export class TaskGroupComponent implements OnInit {
  taskLists$!:Observable<TaskList[]>;

  constructor(private taskService:TasksService, private router: Router) { }

  ngOnInit(): void {
    this.taskLists$ = this.taskService.getTaskLists();
  }

  addNewTask(): void {
    this.router.navigateByUrl("todo/add-task-list");
  }
}
