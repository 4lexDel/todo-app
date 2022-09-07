import { Component, Input, OnInit } from '@angular/core';
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

  constructor(private taskService:TasksService) { 
  }

  ngOnInit(): void {
  }

}
