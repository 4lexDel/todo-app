import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { TaskList } from 'src/app/core/models/task-list.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.scss']
})
export class UpdateTaskComponent implements OnInit {
  updateTaskForm!: FormGroup;
  taskLists$!:Observable<TaskList[]>;
  taskId!: number;
  taskListId!: number;

  constructor(private location: Location, private formBuilder: FormBuilder, private taskService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.taskLists$ = this.taskService.getTaskLists();

    this.updateTaskForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      advancement: [null, [Validators.required]],
    });

    this.taskId = this.activatedRoute.snapshot.params["idTask"];
    this.taskListId = this.activatedRoute.snapshot.params["idTaskList"];
    let currentTask = await lastValueFrom(this.taskService.getTaskInTaskList(this.taskListId, this.taskId));

    this.updateTaskForm.patchValue(currentTask);
  }

  async onSubmitForm() {
    //console.log(this.newTaskForm.value);
    //this.router.navigateByUrl('/todo');
    let newTask = this.updateTaskForm.value;

    console.log(newTask);
    
    let newTaskReceive = await lastValueFrom(this.taskService.updateTaskInTaskList(newTask, this.taskListId, this.taskId));
    this.router.navigateByUrl(`/todo/${this.taskListId}`);
  }

  backPage(): void {
    this.location.back();
  }
}
