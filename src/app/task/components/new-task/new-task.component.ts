import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { TaskList } from 'src/app/core/models/task-list.model';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  newTaskForm!: FormGroup;
  process:boolean = false;
  taskListId!:number;

  selectColor: string = "#FFFFFF";

  constructor(private formBuilder: FormBuilder, private taskService: TasksService, private router: Router, private location: Location, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.taskListId = this.activatedRoute.snapshot.params["idTasklist"];

    this.newTaskForm = this.formBuilder.group({
      title: [null, [Validators.required]],
      description: [null, [Validators.required]],
      priority: [null, [Validators.required]],
      startDate: [null, [Validators.required]],
      endDate: [null, [Validators.required]],
      advancement: [null, [Validators.required]],
      backgroundColor: [null, null],
      fontColor: [null, null]
    });

    this.newTaskForm.patchValue({
      backgroundColor: "#f1d07d",
      fontColor: "#000000"
    })
  }

  async onSubmitForm() {
    this.process = true;
    //console.log(this.newTaskForm.value);
    //this.router.navigateByUrl('/todo');
    let newTask = this.newTaskForm.value;

    console.log(newTask);
    
    let newTaskReceive = await lastValueFrom(this.taskService.addTaskInTaskList(newTask, this.taskListId));
    this.process = false;
    this.router.navigateByUrl(`/todo/${this.taskListId}`);
  }
  
  backPage(): void {
    this.location.back();
  }
}
