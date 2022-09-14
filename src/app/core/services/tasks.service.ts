import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TaskList } from "../models/task-list.model";
import { Task } from "../models/task.model";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
  })
  export class TasksService {
    taskLists$!:Observable<TaskList[]>;
    domainName!:string;   

    constructor(private http: HttpClient, authService: AuthService){
      this.domainName = authService.getDomainName();
    }

    getTaskLists(): Observable<TaskList[]>{
      return this.http.get<TaskList[]>(`${this.domainName}/task-lists`);
    }

    getTaskListByID(id:number): Observable<TaskList>{
      return this.http.get<TaskList>(`${this.domainName}/task-lists/${id}`);
    }

    getTaskInTaskList(taskListId:number, taskId:number): Observable<TaskList>{
      return this.http.get<TaskList>(`${this.domainName}/task-lists/${taskListId}/${taskId}`);
    }

    addTaskList(taskList:TaskList): Observable<Task>{
      return this.http.post<Task>(`${this.domainName}/task-list/`, taskList);
    }

    addTaskInTaskList(task:Task, taskListId:number): Observable<Task>{
      return this.http.post<Task>(`${this.domainName}/task-lists/${taskListId}`, task);
    }

    deleteTaskList(taskListId: number) {
      return this.http.delete<TaskList>(`${this.domainName}/task-lists/${taskListId}`)
    }  

    deleteTaskInTaskList(taskListId:number, taskId:number): Observable<Task>{
      return this.http.delete<Task>(`${this.domainName}/task-lists/${taskListId}/${taskId}`)
    }

    updateTaskInTaskList(updatedTask: Task, taskListId:number, taskId:number): Observable<Task>{
      return this.http.put<Task>(`${this.domainName}/task-lists/${taskListId}/${taskId}`, updatedTask)
    }
  }