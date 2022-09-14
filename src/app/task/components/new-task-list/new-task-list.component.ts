import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-new-task-list',
  templateUrl: './new-task-list.component.html',
  styleUrls: ['./new-task-list.component.scss']
})
export class NewTaskListComponent implements OnInit {
  newTaskListForm!: FormGroup;
  process:boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private location: Location, private taskService: TasksService) { }

  ngOnInit(): void {
    this.newTaskListForm = this.formBuilder.group({
      title: [null, [Validators.required]],
    });
  }

  async onSubmitForm() {
    this.process = true;
    //console.log(this.newTaskForm.value);
    //this.router.navigateByUrl('/todo');
    let newTaskList = this.newTaskListForm.value;

    let finalTaskList = {
      ...newTaskList,
      tasks:[]
    }

    console.log(finalTaskList);
    
    let newTaskListReceive = await lastValueFrom(this.taskService.addTaskList(finalTaskList));
    this.process = false;
    this.router.navigateByUrl(`/todo`);
  }
  
  backPage(): void {
    this.location.back();
  }
}
