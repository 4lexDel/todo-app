import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TaskList } from 'src/app/core/models/task-list.model';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() taskList!:TaskList;

  constructor(private taskService:TasksService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  onViewTaskList(){
    this.router.navigateByUrl(`/todo/${this.taskList.id}`);
  }

  async deleteTaskList(){
    let taskListDelete = await lastValueFrom(this.taskService.deleteTaskList(this.taskList.id));

    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/todo/`]);
    });
  }

  updateTaskList(){
    this.router.navigateByUrl(`/todo/update-task-list/${this.taskList.id}`);
  }
}
