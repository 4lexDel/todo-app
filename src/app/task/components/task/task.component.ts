import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task!:Task;
  @Input() taskListId!:number;

  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  async deleteTask() {
    let taskDelete = await lastValueFrom(this.taskService.deleteTaskInTaskList(this.taskListId, this.task.id));
    //this.router.navigateByUrl(`/todo/${this.taskListId}`);
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
      this.router.navigate([`/todo/${this.taskListId}`]);
    });
  }

  updateTask(){
    this.router.navigateByUrl(`/todo/update-task/${this.taskListId}/${this.task.id}`);
  }

}
