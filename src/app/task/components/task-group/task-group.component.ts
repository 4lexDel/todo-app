import { Component, OnInit } from '@angular/core';
import { TaskList } from 'src/app/core/models/task-list.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-task-group',
  templateUrl: './task-group.component.html',
  styleUrls: ['./task-group.component.scss']
})
export class TaskGroupComponent implements OnInit {
  taskLists!:TaskList[];

  constructor(private taskService:TasksService) { }

  ngOnInit(): void {
    this.taskLists = this.taskService.getTaskLists();
  }

}
