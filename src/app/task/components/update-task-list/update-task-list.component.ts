import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-update-task-list',
  templateUrl: './update-task-list.component.html',
  styleUrls: ['./update-task-list.component.scss']
})
export class UpdateTaskListComponent implements OnInit {
  updateTaskListForm!: FormGroup;
  taskListId!: number;
  process:boolean = false;

  constructor(private location: Location, private formBuilder: FormBuilder, private taskService: TasksService, private router: Router, private activatedRoute: ActivatedRoute) { }

  async ngOnInit(): Promise<void> {
    this.updateTaskListForm = this.formBuilder.group({
      title: [null, [Validators.required]]
    });

    this.taskListId = this.activatedRoute.snapshot.params["idTaskList"];
    let currentTaskList = await lastValueFrom(this.taskService.getTaskListByID(this.taskListId));

    this.updateTaskListForm.patchValue(currentTaskList);
  }

  async onSubmitForm() {
    this.process = true;

    let newTaskList = this.updateTaskListForm.value;

    let finalTaskList = {
      ...newTaskList,
      tasks:[]
    }

    console.log(finalTaskList);
    
    let newTaskReceive = await lastValueFrom(this.taskService.updateTaskList(finalTaskList, this.taskListId));
    this.process = false;

    this.router.navigateByUrl(`/todo`);
  }

  backPage(): void {
    this.location.back();
  }
}
