import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TaskList } from 'src/app/core/models/task-list.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-single-task-list',
  templateUrl: './single-task-list.component.html',
  styleUrls: ['./single-task-list.component.scss']
})
export class SingleTaskListComponent implements OnInit {
  taskList$!:Observable<TaskList>;
  taskListId!:number;

  constructor(private taskService:TasksService, private activatedRoute: ActivatedRoute, private location: Location, private router: Router) { 
  }

  ngOnInit(): void {
    this.taskListId = this.activatedRoute.snapshot.params['id'];

    this.taskList$ = this.taskService.getTaskListByID(this.taskListId);
  }

  backPage(): void {
    this.router.navigateByUrl(`/todo`);
  }

  addNewTask(): void {
    this.router.navigateByUrl(`/todo/add-task/${this.taskListId}`);
  }
}
